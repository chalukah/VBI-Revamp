import Link from "next/link";
import { withBasePath } from "../lib/base-path";
import { eventPanels, panelFolderLink, panelThemes } from "../lib/site-data";

const eventVisuals = [
  withBasePath("/assets/panels/panel-01.jpg"),
  withBasePath("/assets/panels/panel-04.jpg"),
  withBasePath("/assets/panels/panel-08.jpg"),
  withBasePath("/assets/panels/panel-12.jpg"),
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
  title: "Events | Veterinary Business Institute",
  description:
    "Browse veterinary event panels with direct Vimeo replay links, topic coverage, and curated summaries.",
};

export default function EventsPage() {
  const featuredPanel = eventPanels[0];
  const eventsSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Veterinary Event Panels",
    description:
      "A replay archive of veterinary leadership, management, client communication, technology, and financial health panels.",
    hasPart: {
      "@type": "ItemList",
      name: "Event panel archive",
      itemListElement: eventPanels.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "VideoObject",
          name: item.title,
          url: item.href,
          uploadDate: toIsoDate(item.date),
          duration: toIsoDuration(item.duration),
          description: item.summary,
        },
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventsSchema) }}
      />
      <section className="page-hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow text-accent">Veterinary Event Panels</span>
            <p className="hero-kicker">Recurring conversations on leadership, communication, compliance, and growth.</p>
            <h1>
              Panel conversations that make the platform feel more <em>alive.</em>
            </h1>
            <p className="hero-lead">
              These recurring event panels turn VBI into more than a podcast and replay archive. They
              add current, topic-specific conversations across leadership, marketing, compliance,
              wellbeing, technology, client communication, and financial health.
            </p>
            <div className="button-row">
              <a className="button button-primary" href={featuredPanel.href} target="_blank" rel="noreferrer">
                Watch Latest Panel
              </a>
              <a className="button button-secondary" href={panelFolderLink} target="_blank" rel="noreferrer">
                Open Vimeo Folder
              </a>
            </div>
          </div>

          <div className="image-frame">
            <img src={featuredPanel.image} alt={featuredPanel.title} />
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <article className="card card-dark feature-panel">
            <div className="panel-head">
              <span className="eyebrow text-accent">Featured Panel</span>
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
                  <li>Direct replay access for immediate viewing.</li>
                </ul>
                <div className="button-row">
                  <a className="button button-primary" href={featuredPanel.href} target="_blank" rel="noreferrer">
                    Watch Panel
                  </a>
                  <Link className="button button-secondary button-dark" href="/webinars">
                    Compare Webinar Replays
                  </Link>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow text-accent">Why Panels Matter</span>
            <h2>They give VBI a repeatable, timely editorial rhythm.</h2>
          </div>
          <div className="grid-three">
            {panelThemes.map((item) => (
              <article className="card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow text-accent">Panel Archive</span>
            <h2>Twelve event panels are now organized as a browseable replay collection.</h2>
          </div>
          <div className="grid-two">
            {eventPanels.map((item) => (
              <article className="card archive-card" key={item.slug}>
                <img src={item.image} alt={item.title} />
                <span className="card-label">
                  {item.date} / {item.duration}
                </span>
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
                <p className="muted-text">{item.subtitle}</p>
                <a href={item.href} target="_blank" rel="noreferrer">
                  Watch Panel
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow text-accent">Panel Visual Highlights</span>
            <h2>The panel archive now has enough density to behave like a real editorial series.</h2>
          </div>
          <div className="grid-two">
            {eventVisuals.map((image, index) => (
              <article className="card archive-card" key={image}>
                <img src={image} alt={`Event panel visual ${index + 1}`} />
                <h3>Event panel replay from the Vimeo review collection</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container page-cta">
          <div>
            <span className="eyebrow text-accent">Build the Ecosystem</span>
            <h2>Panels work best when they connect back into podcast listening, webinar replays, and strategy support.</h2>
            <p>
              Panel conversations give practices a faster entry point into current topics and create a
              stronger bridge into the podcast, replay library, and marketing support.
            </p>
          </div>
          <div className="cta-actions">
            <Link className="button button-secondary" href="/podcast">
              Go to Podcast
            </Link>
            <Link className="button button-secondary" href="/webinars">
              Go to Webinars
            </Link>
            <Link className="button button-primary" href="/marketing">
              Explore Marketing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
