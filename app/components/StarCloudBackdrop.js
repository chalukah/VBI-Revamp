"use client";

import { startTransition, useEffect, useMemo, useRef, useState } from "react";

const STAR_COLORS = [
  "rgba(255, 255, 255, 0.96)",
  "rgba(231, 248, 242, 0.96)",
  "rgba(183, 216, 192, 0.94)",
  "rgba(47, 107, 69, 0.82)",
];

function seededUnit(seed) {
  const value = Math.sin(seed * 12.9898) * 43758.5453123;
  return value - Math.floor(value);
}

export default function StarCloudBackdrop({
  starCount = 220,
  starSize = 2.4,
  cloudSize = 1200,
  baseSpeed = 0.9,
}) {
  const containerRef = useRef(null);
  const animationRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const centerRef = useRef({ x: 0, y: 0 });
  const initialStars = useMemo(
    () =>
      Array.from({ length: starCount }, (_, index) => ({
        id: index,
        x: (seededUnit((index + 1) * 1.17) - 0.5) * cloudSize,
        y: (seededUnit((index + 1) * 2.31) - 0.5) * cloudSize,
        z: seededUnit((index + 1) * 3.53) * cloudSize,
        color: STAR_COLORS[Math.floor(seededUnit((index + 1) * 4.79) * STAR_COLORS.length)],
      })),
    [cloudSize, starCount]
  );
  const [stars, setStars] = useState(initialStars);

  useEffect(() => {
    setStars(initialStars);
  }, [initialStars]);

  useEffect(() => {
    function updateCenter() {
      if (!containerRef.current) {
        return;
      }

      const rect = containerRef.current.getBoundingClientRect();
      const isCompact = window.innerWidth <= 1024;
      centerRef.current = {
        x: rect.left + rect.width * (isCompact ? 0.5 : 0.72),
        y: rect.top + rect.height * (isCompact ? 0.34 : 0.48),
      };
      mouseRef.current = { ...centerRef.current };
    }

    updateCenter();
    window.addEventListener("resize", updateCenter);
    return () => window.removeEventListener("resize", updateCenter);
  }, []);

  useEffect(() => {
    function handleMouseMove(event) {
      mouseRef.current = { x: event.clientX, y: event.clientY };
    }

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    function animate() {
      const mouse = mouseRef.current;
      const center = centerRef.current;
      const dx = mouse.x - center.x;
      const dy = mouse.y - center.y;
      const distance = Math.sqrt(dx * dx + dy * dy) || 1;
      let moveX = 0;
      let moveY = 0;
      let moveZ = 0;

      const centerZone = 60;
      const transitionZone = 180;

      if (distance < centerZone) {
        moveZ = baseSpeed * 10;
      } else if (distance < centerZone + transitionZone) {
        const blend = (distance - centerZone) / transitionZone;
        const easedBlend = blend * blend * (3 - 2 * blend);
        moveZ = baseSpeed * 10 * (1 - easedBlend);
        const directionalSpeed = baseSpeed * (1200 / distance) * easedBlend;
        moveX = (-dx / distance) * directionalSpeed;
        moveY = (-dy / distance) * directionalSpeed;
      } else {
        const directionalSpeed = baseSpeed * (1200 / distance);
        moveX = (-dx / distance) * directionalSpeed;
        moveY = (-dy / distance) * directionalSpeed;
      }

      startTransition(() => {
        setStars((currentStars) =>
          currentStars.map((star) => {
            let x = star.x + moveX;
            let y = star.y + moveY;
            let z = star.z + moveZ;

            if (x > cloudSize / 2) x = -cloudSize / 2;
            if (x < -cloudSize / 2) x = cloudSize / 2;
            if (y > cloudSize / 2) y = -cloudSize / 2;
            if (y < -cloudSize / 2) y = cloudSize / 2;
            if (z > cloudSize) z = 0;
            if (z < 0) z = cloudSize;

            return { ...star, x, y, z };
          })
        );
      });

      animationRef.current = window.requestAnimationFrame(animate);
    }

    animationRef.current = window.requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) {
        window.cancelAnimationFrame(animationRef.current);
      }
    };
  }, [baseSpeed, cloudSize]);

  return (
    <div aria-hidden="true" className="star-cloud-canvas" ref={containerRef}>
      {stars.map((star) => {
        const scale = 300 / (300 + star.z);
        const x = star.x * scale;
        const y = star.y * scale;
        const size = starSize * scale;
        const opacity = Math.max(0.08, 1 - star.z / cloudSize);

        return (
          <span
            className="star-cloud-node"
            key={star.id}
            style={{
              left: "50%",
              top: "50%",
              width: `${size}px`,
              height: `${size}px`,
              backgroundColor: star.color,
              opacity,
              transform: `translate(${x - size / 2}px, ${y - size / 2}px)`,
            }}
          />
        );
      })}
    </div>
  );
}

