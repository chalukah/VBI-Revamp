import Link from "next/link";
import {
  auditLink,
  episodes,
  eventPanels,
  focusAreas,
  homepageMetrics,
  hosts,
  webinars,
} from "./lib/site-data";
import { withBasePath } from "./lib/base-path";
import SignalMarquee from "./components/SignalMarquee";
import HeroRedesign from "./components/HeroRedesign";
import ParallaxCard from "./components/ParallaxCard";

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

      <SignalMarquee heading="The strongest VBI ideas now move across the site as one visual system." rows={signalRows} />

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

          <ParallaxCard as="aside" className="card card-dark side-panel" tiltDepth={5} shadowStrength={0.2}>
            <span className="eyebrow text-accent">Lead Voice</span>
            <img className="portrait" src={featuredHost.image} alt={featuredHost.name} />
            <h3>{featuredHost.name}</h3>
            <p className="muted-text">{featuredHost.role}</p>
            <p>{featuredHost.body}</p>
            <Link className="button button-secondary button-dark" href="/about">
              Learn About the Team
            </Link>
          </ParallaxCard>
        </div>
      </section>

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

      <section className="section section-muted">
        <div className="container page-cta">
          <div>
            <span className="eyebrow text-accent">Next Step</span>
            <h2>Use the content hub for education. Use the audit to turn insight into action.</h2>
            <p>
              Start with the podcast, panel archive, or replay library, then move into a strategy
              conversation when your practice is ready for sharper visibility and growth planning.
            </p>
          </div>
          <div className="cta-actions">
            <Link className="button button-secondary" href="/podcast">
              Explore the Podcast
            </Link>
            <Link className="button button-secondary" href="/events">
              Explore Panels
            </Link>
            <Link className="button button-secondary" href="/webinars">
              Explore Webinars
            </Link>
            <Link className="button button-secondary" href="/marketing">
              Explore Marketing
            </Link>
            <a className="button button-primary" href={auditLink} target="_blank" rel="noreferrer">
              Book a Visibility Audit
            </a>
            <Link className="button button-secondary" href="/contact">
              Contact the Team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
