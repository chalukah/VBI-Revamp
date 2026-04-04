import Link from "next/link";
import {
  auditLink,
  episodes,
  eventPanels,
  focusAreas,
  freeResources,
  homepageMetrics,
  hosts,
  listeningPlatforms,
  marketingPillars,
  servicePillars,
  socialLinks,
  testimonials,
  webinars,
} from "./lib/site-data";
import { withBasePath } from "./lib/base-path";
import SignalMarquee from "./components/SignalMarquee";
import HeroRedesign from "./components/HeroRedesign";
import ParallaxCard from "./components/ParallaxCard";
import AnimatedCounter from "./components/AnimatedCounter";
import AttractButton from "./components/AttractButton";
import CardFlip from "./components/CardFlip";

const homeRoutes = [
  {
    label: "About the Institute",
    title: "See how VBI is positioned for veterinary leaders, teams, and growth-minded practices.",
    body: "A clearer story of why the platform exists, what it covers, and how it connects business education with real practice decisions.",
    href: "/about",
  },
  {
    label: "Podcast Archive",
    title: "Move from a generic episode list to a more editorial listening experience.",
    body: "Featured episodes, host authority, and sharper topic grouping make the podcast library easier to browse and trust.",
    href: "/podcast",
  },
  {
    label: "Event Panels",
    title: "Turn recurring expert panels into a visible content pillar with replay-ready access.",
    body: "The Vimeo event folder now becomes a first-class route with dates, categories, and strong discovery paths.",
    href: "/events",
  },
  {
    label: "Webinar Replay Library",
    title: "Treat the archive like a replay hub instead of a simple list of old event posts.",
    body: "Dates, summaries, themes, and replay framing help the archive keep working long after the live event is over.",
    href: "/webinars",
  },
  {
    label: "Marketing Offer",
    title: "Present the audit and strategy offer with more proof, process, and clarity.",
    body: "The marketing page now turns a thin sales block into a stronger conversion path built around the VBI and Ekwa relationship.",
    href: "/marketing",
  },
];

const homeVisuals = [
  {
    image: withBasePath("/assets/panels/panel-01.jpg"),
    title: "Leadership and culture panels",
  },
  {
    image: withBasePath("/assets/panels/panel-02.jpg"),
    title: "Management and storytelling sessions",
  },
  {
    image: withBasePath("/assets/webinar-mar26.jpg"),
    title: "Replay-ready webinars",
  },
  {
    image: withBasePath("/assets/episode-103.jpg"),
    title: "Podcast flagship episodes",
  },
];

const signalRows = [
  [
    {
      label: "Podcast",
      title: episodes[0].title,
      body: episodes[0].summary,
    },
    {
      label: "Event Panels",
      title: eventPanels[0].title,
      body: eventPanels[0].summary,
    },
    {
      label: "Webinars",
      title: webinars[0].title,
      body: webinars[0].summary,
    },
  ],
  focusAreas.map((item) => ({
    label: "Focus Area",
    title: item.title,
    body: item.body,
  })),
];

const reverseMarqueeItems = [
  "Veterinary Leadership",
  "Practice Growth",
  "Team Culture",
  "Marketing Strategy",
  "Client Experience",
  "Financial Resilience",
  "Staffing Models",
  "Operational Efficiency",
  "Digital Visibility",
  "Succession Planning",
];

const pillarIcons = {
  users: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  briefcase: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  ),
  "trending-up": (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" />
    </svg>
  ),
  monitor: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  ),
  "dollar-sign": (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  ),
  heart: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  ),
  shield: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  target: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
    </svg>
  ),
  clipboard: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" /><rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
    </svg>
  ),
  "file-text": (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" />
    </svg>
  ),
  "bar-chart": (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="20" x2="12" y2="10" /><line x1="18" y1="20" x2="18" y2="4" /><line x1="6" y1="20" x2="6" y2="16" />
    </svg>
  ),
};

function StarRating({ count = 5 }) {
  return (
    <span className="star-rating" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }, (_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="var(--teal-500)" stroke="none">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </span>
  );
}

function toIsoDate(value) {
  const parsed = new Date(value);
  return Number.isNaN(parsed.getTime()) ? undefined : parsed.toISOString().split("T")[0];
}

function toIsoDuration(value) {
  const parts = value.split(":").map((item) => Number.parseInt(item, 10));
  if (parts.some((item) => Number.isNaN(item))) {
    return undefined;
  }

  if (parts.length === 3) {
    const [hours, minutes, seconds] = parts;
    return `PT${hours}H${minutes}M${seconds}S`;
  }

  if (parts.length === 2) {
    const [minutes, seconds] = parts;
    return `PT${minutes}M${seconds}S`;
  }

  return undefined;
}

export const metadata = {
  title: "Veterinary Business Institute | Podcast, Panels, and Practice Growth",
  description:
    "The VBI homepage built around podcasts, event panels, webinar replays, and veterinary growth strategy.",
};

export default function HomePage() {
  const featuredEpisode = episodes[0];
  const featuredHost = hosts[0];
  const featuredPanel = eventPanels[0];
  const homeSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Veterinary Business Institute Home",
    description:
      "The VBI homepage organized around podcast episodes, event panel replays, webinars, and veterinary growth support.",
    hasPart: [
      {
        "@type": "PodcastEpisode",
        name: featuredEpisode.title,
        url: featuredEpisode.href,
        datePublished: toIsoDate(featuredEpisode.date),
      },
      {
        "@type": "VideoObject",
        name: featuredPanel.title,
        url: featuredPanel.href,
        uploadDate: toIsoDate(featuredPanel.date),
        duration: toIsoDuration(featuredPanel.duration),
      },
      {
        "@type": "ItemList",
        name: "Primary routes",
        itemListElement: homeRoutes.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.label,
          url: `https://www.veterinarybusinessinstitute.com${item.href}`,
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }}
      />
      <HeroRedesign />

      {/* ── Signal Marquee ── */}
      <SignalMarquee heading="The strongest VBI ideas now move across the site as one visual system." rows={signalRows} />

      {/* ── Ghost Text Stats Section ── */}
      <section className="section section-stats-ghost">
        <div className="ghost-text" aria-hidden="true">VBI</div>
        <div className="container stats-ghost-grid">
          <div className="stats-ghost-counters">
            <div className="ghost-counter-item">
              <AnimatedCounter end={103} suffix="+" />
              <p>Podcast episodes published with expert veterinary business insights</p>
            </div>
            <div className="ghost-counter-item">
              <AnimatedCounter end={12} />
              <p>Replay-ready event panels hosted on Vimeo with expert veterinary voices</p>
            </div>
            <div className="ghost-counter-item">
              <AnimatedCounter end={16000} suffix="+" duration={2500} />
              <p>Positive testimonials across the Ekwa marketing ecosystem</p>
            </div>
          </div>
          <div className="stats-ghost-copy">
            <span className="eyebrow text-accent">Built for Veterinary Leaders</span>
            <h2>Powered by Years of Veterinary Business Expertise.</h2>
            <p>
              VBI brings together podcast conversations, expert panel replays, webinar education,
              and strategic marketing support into one platform designed for practice owners,
              managers, and growth-minded veterinary teams.
            </p>
            <div className="button-row">
              <Link className="button button-primary" href="/about">
                Our Story
              </Link>
              <AttractButton href="/consultation">
                Free Strategy Call
              </AttractButton>
            </div>
          </div>
        </div>
      </section>

      {/* ── Service Pillars Grid ── */}
      <section className="section section-muted">
        <div className="container">
          <div className="section-heading section-heading-centered">
            <span className="eyebrow text-accent">What We Cover</span>
            <h2>Eight pillars of veterinary business education.</h2>
          </div>
          <div className="pillars-grid">
            {servicePillars.map((item) => (
              <Link key={item.title} href={item.href} style={{ display: "block" }}>
                <ParallaxCard as="div" className="card pillar-card" tiltDepth={6}>
                  <div className="pillar-icon">{pillarIcons[item.icon]}</div>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                  <span className="pillar-arrow">&rarr;</span>
                </ParallaxCard>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Split Image + Marketing Section ── */}
      <section className="section">
        <div className="container marketing-split">
          <div className="marketing-split-image">
            <img src={withBasePath("/assets/webinar-mar26.jpg")} alt="Veterinary marketing strategy" />
            <div className="marketing-split-badge">
              Veterinary SEO &amp; Visibility That Works
            </div>
          </div>
          <div className="marketing-split-copy">
            <span className="eyebrow text-accent">Marketing &amp; Growth</span>
            <h2>Turn insight into visibility and visibility into growth.</h2>
            <p>
              VBI&apos;s marketing offer is built around the reality that most practices need
              stronger local visibility before they can convert more of the right pet owners.
            </p>
            <ul className="check-list">
              <li>A disciplined six-factor audit across the ranking signals that matter</li>
              <li>Local market and competitor analysis tailored to your geography</li>
              <li>A VIP team and custom marketing plan built for veterinary practices</li>
              <li>Backed by 16,000+ positive testimonials from the Ekwa network</li>
            </ul>
            <div className="button-row">
              <Link className="button button-primary" href="/marketing">
                Explore Marketing
              </Link>
              <a className="button button-secondary" href={auditLink} target="_blank" rel="noreferrer">
                Free SEO Audit
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Podcast Host Spotlight ── */}
      <section className="section section-dark">
        <div className="container">
          <div className="section-heading section-heading-centered">
            <span className="eyebrow text-accent">The Podcast</span>
            <h2 style={{ color: "rgba(255,255,255,0.95)" }}>
              {episodes.length} episodes of veterinary business leadership.
            </h2>
          </div>

          <div className="podcast-spotlight-grid">
            <ParallaxCard as="div" className="card card-dark podcast-host-card" tiltDepth={4} shadowStrength={0.2}>
              <div className="podcast-host-header">
                <img className="podcast-host-avatar" src={featuredHost.image} alt={featuredHost.name} />
                <div className="podcast-host-meta">
                  <span className="eyebrow text-accent">Your Host</span>
                  <h3>{featuredHost.name}</h3>
                  <p className="muted-text">{featuredHost.role}</p>
                </div>
              </div>
              <p>{featuredHost.body}</p>
              <div className="podcast-host-socials">
                {socialLinks.slice(0, 3).map((link) => (
                  <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="social-pill">
                    {link.label}
                  </a>
                ))}
                <Link href="/guest-speaker" className="social-pill">
                  Be a Guest
                </Link>
              </div>
            </ParallaxCard>

            <div className="podcast-episodes-col">
              {episodes.slice(0, 3).map((ep) => (
                <a key={ep.number} href={ep.href} target="_blank" rel="noreferrer" style={{ display: "block" }}>
                  <ParallaxCard as="article" className="card card-dark podcast-ep-card" tiltDepth={5} shadowStrength={0.15}>
                    <img className="podcast-ep-thumb" src={ep.image} alt={`Episode ${ep.number}`} />
                    <div className="podcast-ep-info">
                      <span className="podcast-ep-badge">EP {ep.number}</span>
                      <h4>{ep.title}</h4>
                      <p>{ep.date}</p>
                    </div>
                  </ParallaxCard>
                </a>
              ))}
            </div>
          </div>

          <div className="podcast-platforms">
            <span>Listen on:</span>
            {listeningPlatforms.map((p) => (
              <a key={p.label} href={p.href} target="_blank" rel="noreferrer" className="platform-pill">
                {p.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Reverse Marquee ── */}
      <div className="reverse-marquee-band">
        <div className="reverse-marquee-track">
          {[...reverseMarqueeItems, ...reverseMarqueeItems].map((item, i) => (
            <span key={i} className="reverse-marquee-item">
              {item}
              <span className="reverse-marquee-dot" />
            </span>
          ))}
        </div>
      </div>

      {/* ── Why VBI Stands Out ── */}
      <section className="section">
        <div className="container split-grid">
          <div className="section-copy">
            <span className="eyebrow text-accent">Why VBI Stands Out</span>
            <h2>A veterinary business hub with stronger pathways into learning and growth.</h2>
            <p>
              Veterinary teams need more than one content stream. VBI brings together podcast
              conversations, event panel replays, webinar education, and strategic marketing support
              so visitors can move from insight into action without losing context.
            </p>
            <p>
              The result is a clearer platform for practice owners, managers, and growth-minded
              teams who want leadership guidance, operational ideas, and stronger visibility.
            </p>
          </div>

          <div className="stat-grid">
            {homepageMetrics.map((item) => (
              <ParallaxCard key={item.label} as="article" className="card stat-card" tiltDepth={6} shadowStrength={0.08}>
                <strong>{item.value}</strong>
                <p>{item.label}</p>
              </ParallaxCard>
            ))}
          </div>
        </div>
      </section>

      {/* ── Core Coverage ── */}
      <section className="section section-muted">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow text-accent">Core Coverage</span>
            <h2>What veterinary teams can actually use from the institute.</h2>
          </div>
          <div className="grid-two">
            {focusAreas.map((item, index) => (
              <ParallaxCard key={item.title} as="article" className="card feature-card" tiltDepth={6}>
                <span className="feature-index">{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </ParallaxCard>
            ))}
          </div>
        </div>
      </section>

      {/* ── Latest Event Panel ── */}
      <section className="section section-dark">
        <div className="container showcase-grid">
          <ParallaxCard as="article" className="card card-dark feature-panel" tiltDepth={4} shadowStrength={0.2}>
            <div className="panel-head">
              <span className="eyebrow text-accent">Latest Event Panel</span>
              <span className="meta-text">
                {featuredPanel.date} / {featuredPanel.duration}
              </span>
            </div>
            <div className="media-panel">
              <img src={featuredPanel.image} alt={featuredPanel.title} />
              <div>
                <h2>{featuredPanel.title}</h2>
                <p>{featuredPanel.summary}</p>
                <ul className="check-list">
                  <li>{featuredPanel.subtitle}</li>
                  <li>Category: {featuredPanel.category}</li>
                  <li>Direct replay access from the reviewed Vimeo folder.</li>
                </ul>
                <div className="button-row">
                  <a className="button button-primary" href={featuredPanel.href} target="_blank" rel="noreferrer">
                    Watch the Panel
                  </a>
                  <Link className="button button-secondary button-dark" href="/events">
                    Browse All Panels
                  </Link>
                </div>
              </div>
            </div>
          </ParallaxCard>

          <div className="panel-flip-stack">
            <CardFlip
              title="Event Panels"
              subtitle="Replay-ready veterinary conversations"
              description="Expert-led panels on leadership, operations, and culture — recorded and available on demand."
              features={["Leadership friction", "Team culture shifts", "Operational clarity", "Practice growth"]}
              ctaLabel="Browse All Panels"
              ctaHref="/events"
            />
            <CardFlip
              title="Free Strategy Session"
              subtitle="60-minute marketing deep-dive"
              description="A customised marketing plan built around your practice, with 4-5 hours of prep before the call."
              features={["Local SEO audit", "Google ranking plan", "New client acquisition", "Detailed follow-up report"]}
              ctaLabel="Book Your Session"
              ctaHref="/consultation"
            />
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="section">
        <div className="container">
          <div className="section-heading section-heading-centered">
            <span className="eyebrow text-accent">What People Say</span>
            <h2>Trusted by veterinary leaders across North America.</h2>
          </div>
          <div className="testimonial-track-wrapper">
            <div className="testimonial-track">
              {[...testimonials, ...testimonials].map((item, i) => (
                <article className="testimonial-card" key={`${item.name}-${i}`}>
                  <StarRating count={item.rating} />
                  <blockquote>{item.quote}</blockquote>
                  <div className="testimonial-footer">
                    <strong>{item.name}</strong>
                    <span>{item.role}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Explore the Institute ── */}
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow text-accent">Explore the Institute</span>
            <h2>Choose the part of the platform that best matches what your practice needs next.</h2>
          </div>
          <div className="grid-two">
            {homeRoutes.map((item) => (
              <Link key={item.href} href={item.href} style={{ display: "block" }}>
                <ParallaxCard as="div" className="card route-card" tiltDepth={7}>
                  <span className="card-label">{item.label}</span>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </ParallaxCard>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Event Panels ── */}
      <section className="section section-muted">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow text-accent">Event Panels</span>
            <h2>Panels now sit alongside the podcast and webinars as a first-class content pillar.</h2>
          </div>
          <div className="grid-three">
            {eventPanels.slice(0, 3).map((item) => (
              <ParallaxCard key={item.slug} as="article" className="card archive-card" tiltDepth={6}>
                <img src={item.image} alt={item.title} />
                <span className="card-label">{item.date}</span>
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
                <a href={item.href} target="_blank" rel="noreferrer">
                  Watch Panel
                </a>
              </ParallaxCard>
            ))}
          </div>
        </div>
      </section>

      {/* ── Replay Library ── */}
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow text-accent">Replay Library</span>
            <h2>Recent webinar replays still matter, but they no longer carry the whole education layer alone.</h2>
          </div>
          <div className="grid-three">
            {webinars.slice(0, 3).map((item) => (
              <ParallaxCard key={item.title} as="article" className="card archive-card" tiltDepth={6}>
                <img src={item.image} alt={item.title} />
                <span className="card-label">{item.date}</span>
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
                <a href={item.href} target="_blank" rel="noreferrer">
                  Watch Replay
                </a>
              </ParallaxCard>
            ))}
          </div>
        </div>
      </section>

      {/* ── Free Resources / Lead Magnet ── */}
      <section className="section section-resources">
        <div className="ghost-text ghost-text-alt" aria-hidden="true">TOOLS</div>
        <div className="container">
          <div className="section-heading section-heading-centered">
            <span className="eyebrow text-accent">Free Resources</span>
            <h2>Practical tools built for veterinary practice teams.</h2>
          </div>
          <div className="resources-grid">
            {freeResources.map((item, index) => (
              <Link key={item.title} href={item.href} style={{ display: "block" }}>
                <ParallaxCard
                  as="div"
                  className={`card resource-card ${index === 0 ? "resource-card-featured" : ""}`}
                  tiltDepth={6}
                >
                  <div className="resource-icon">{pillarIcons[item.icon]}</div>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </ParallaxCard>
              </Link>
            ))}
          </div>
          <div className="resources-cta">
            <span className="resources-badge">Free sign-up, then instant access</span>
            <div className="button-row" style={{ justifyContent: "center" }}>
              <Link className="button button-primary" href="/resources/hub">
                Explore All Resources
              </Link>
              <Link className="button button-secondary" href="/community">
                Sign Up Free
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Visual System ── */}
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow text-accent">Visual System</span>
            <h2>Panels, webinars, and podcast content now feel like parts of one designed platform.</h2>
          </div>
          <div className="grid-two">
            {homeVisuals.map((item) => (
              <ParallaxCard key={item.title} as="article" className="card archive-card" tiltDepth={5}>
                <img src={item.image} alt={item.title} />
                <h3>{item.title}</h3>
              </ParallaxCard>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="section section-final-cta">
        <div className="ghost-text ghost-text-cta" aria-hidden="true">GROW</div>
        <div className="container final-cta-inner">
          <div className="final-cta-copy">
            <span className="eyebrow" style={{ color: "rgba(255,255,255,0.6)" }}>Next Step</span>
            <h2>Stop leaving growth on the table.</h2>
            <p>
              Start with the podcast, panel archive, or replay library, then move into a strategy
              conversation when your practice is ready for sharper visibility and growth planning.
            </p>
          </div>
          <div className="final-cta-buttons">
            <AttractButton href="/consultation">
              Book Free Strategy Call
            </AttractButton>
            <Link className="button button-secondary button-dark" href="/podcast">
              Listen to the Podcast
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
