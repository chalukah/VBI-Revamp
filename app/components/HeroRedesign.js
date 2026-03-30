"use client";

import Link from "next/link";
import styles from "./HeroRedesign.module.css";
import { withBasePath } from "../lib/base-path";
import { episodes } from "../lib/site-data";
import ConicGradientBorder from "./ConicGradientBorder";
import SolarIcon from "./SolarIcon";
import TypewriterText from "./TypewriterText";

const heroWords = [
  "stronger practices.",
  "healthier teams.",
  "clearer visibility.",
  "smarter growth.",
];

export default function HeroRedesign() {
  const featuredEpisode = episodes?.[0] || { href: "/podcast" };

  return (
    <section className={styles.heroSection}>
      {/* Decorative curvy line bridging left to right */}
      <svg className={`${styles.curvyGraph} ${styles.animatePath}`} viewBox="0 0 1000 100" preserveAspectRatio="none">
        <path d="M0,50 Q150,90 250,50 T500,50 T750,50 T1000,50" 
              fill="none" 
              stroke="rgba(46, 167, 105, 0.4)" 
              strokeWidth="2" 
              strokeDasharray="8 8" />
        <circle cx="250" cy="50" r="6" fill="#1e9d86" />
        <circle cx="500" cy="50" r="6" fill="#1e9d86" />
        <text className={styles.animateFade} x="240" y="30" fontSize="12" fill="#1e9d86" fontWeight="bold">90%</text>
      </svg>

      <div className={styles.heroContainer}>
        {/* Left Column - Copy & CTA */}
        <div className={styles.heroContent}>
          <span className={`${styles.eyebrow} ${styles.animateReveal}`} style={{ color: 'var(--teal-500)', marginBottom: '1rem', display: 'block', fontWeight: 700, '--delay': '0.1s' }}>
            For Veterinary Leaders Ready to Grow
          </span>
          <h1 className={`${styles.headline} ${styles.animateReveal}`} style={{ '--delay': '0.3s' }}>
            <span className={styles.headlineStatic}>
              Practical insight for veterinary teams building
            </span>
            <span className={styles.typewriterFrame}>
              <TypewriterText
                words={heroWords}
                typingSpeed={88}
                deletingSpeed={54}
                pauseDuration={1400}
                className={styles.typewriterWord}
                cursorClassName={styles.typewriterCursor}
              />
            </span>
          </h1>
          <p className={`${styles.description} ${styles.animateReveal}`} style={{ '--delay': '0.5s' }}>
            Veterinary Business Institute now centers its strongest assets in one place: 
            podcast conversations, event panel replays, webinar education, and strategy content.
          </p>

          <div className={`${styles.buttonGroup} ${styles.animateReveal}`} style={{ '--delay': '0.7s' }}>
            <ConicGradientBorder
              borderColor="#1e9d86"
              overlayBorderColor="rgba(30, 157, 134, 0.2)"
              backgroundColor="rgba(255, 255, 255, 0.03)"
              borderRadius={50}
              animationDuration={4}
              blurRadius={3}
              overlayMargin={1.5}
            >
              <Link href="/community" className={styles.getStartedBtn}>
                <span className={styles.primaryButtonLabel}>Explore the Hub</span>
                <span aria-hidden="true" className={styles.primaryButtonArrow}>
                  <span className={styles.primaryButtonChevron} />
                </span>
              </Link>
            </ConicGradientBorder>
            <ConicGradientBorder
              borderColor="#2ea769"
              overlayBorderColor="rgba(46, 167, 105, 0.15)"
              backgroundColor="rgba(255, 255, 255, 0.03)"
              borderRadius={50}
              animationDuration={5}
              blurRadius={2}
              overlayMargin={1.5}
            >
              <a href={featuredEpisode.href} target="_blank" rel="noreferrer" className={styles.howItWorksBtn}>
                Listen to Episode 103
              </a>
            </ConicGradientBorder>
          </div>

          {/* Core Pillars — solar minimalistic icons */}
          <div className={`${styles.trustedSection} ${styles.animateReveal}`} style={{ '--delay': '0.9s' }}>
            <span className={styles.trustedLabel}>Core Pillars</span>
            <div className={styles.logoRow}>
              <div className={styles.logoBrand} title="Education">
                <SolarIcon name="graduationCap" size={20} />
              </div>
              <div className={styles.logoBrand} title="Podcast">
                <SolarIcon name="microphone" size={20} />
              </div>
              <div className={styles.logoBrand} title="Event Panels">
                <SolarIcon name="video" size={20} />
              </div>
              <div className={styles.logoBrand} title="Growth Strategy">
                <SolarIcon name="barChart" size={20} />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Visual Graphic */}
        <div className={styles.heroVisuals}>
          {/* Background Rotating Rings */}
          <div className={styles.circleWire1}></div>
          <div className={styles.circleWire2}></div>
          
          <div className={`${styles.mainCircle} ${styles.animateReveal}`} style={{ '--delay': '0.8s' }}>
            <img src={withBasePath("/assets/hero-vet.png")} alt="Veterinary Professional" className={styles.personImg} />
          </div>

          {/* Floating Icons — Solar Minimalistic style */}
          <div className={`${styles.floatingIcon} ${styles.animateReveal} ${styles.iconTrophy}`} style={{ '--delay': '1.2s' }}>
            <SolarIcon name="trophy" size={24} />
          </div>
          <div className={`${styles.floatingIcon} ${styles.animateReveal} ${styles.iconSpeaker}`} style={{ '--delay': '1.4s' }}>
            <SolarIcon name="megaphone" size={24} />
          </div>
          <div className={`${styles.floatingIcon} ${styles.animateReveal} ${styles.iconChart}`} style={{ '--delay': '1.6s' }}>
            <SolarIcon name="barChart" size={24} />
          </div>
          <div className={`${styles.floatingIcon} ${styles.animateReveal} ${styles.iconTarget}`} style={{ '--delay': '1.8s' }}>
            <SolarIcon name="target" size={24} />
          </div>

          {/* Award badge */}
          <div className={`${styles.awardCard} ${styles.animateReveal}`} style={{ '--delay': '2.0s' }}>
            <div className={styles.awardMedal}>
              <SolarIcon name="star" size={28} />
            </div>
            <span className={styles.awardText}>103+ Podcast<br/>Episodes</span>
          </div>
        </div>
      </div>
    </section>
  );
}
