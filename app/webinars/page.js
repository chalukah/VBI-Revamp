import Link from "next/link";
import { withBasePath } from "../lib/base-path";
import { eventPanels, webinarArchiveLink, webinars } from "../lib/site-data";

const replayBenefits = [
  "Replay-first framing keeps webinar education useful after the live session ends.",
  "Dates and summaries help visitors understand what is relevant before opening a replay.",
  "Theme-based language makes the archive feel curated instead of simply chronological.",
];

const replaySnapshots = [
  withBasePath("/assets/webinar-mar26.jpg"),
  withBasePath("/assets/webinar-feb19.jpg"),
  withBasePath("/assets/webinar-jan29.jpg"),
  withBasePath("/assets/about-speaker.jpg"),
];

export const metadata = {
  title: "Webinars | Veterinary Business Institute",
  description:
    "Browse replay-ready veterinary webinars focused on leadership, resilience, technology, marketing, and practice growth.",
};

export default function WebinarsPage() {
  const featuredReplay = webinars[0];
  const relatedPanel = eventPanels[1];

  return (
    <>
      <section className="page-hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow text-accent">Replay Library</span>
            <p className="hero-kicker">Replay-ready education for teams working on resilience, growth, and performance.</p>
            <h1>
              Webinar replays for practices building a more <em>resilient future.</em>
            </h1>
            <p className="hero-lead">
              This replay library is designed to keep teaching after the live session ends, with
              stronger summaries, clearer priorities, and an easier path into related VBI content.
            </p>
            <div className="button-row">
              <Link className="button button-primary" href="/webinars/registration">
                Register for Next Live Session
              </Link>
              <a className="button button-secondary" href={featuredReplay.href} target="_blank" rel="noreferrer">
                Watch Featured Replay
              </a>
            </div>
          </div>

          <div className="image-frame">
            <img src={featuredReplay.image} alt={featuredReplay.title} />
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <article className="card card-dark feature-panel">
            <div className="panel-head">
              <span className="eyebrow text-accent">Featured Replay</span>
              <span className="meta-text">{featuredReplay.date}</span>
            </div>
            <div className="media-panel">
              <img src={featuredReplay.image} alt={featuredReplay.title} />
              <div>
                <h2>{featuredReplay.title}</h2>
                <p>{featuredReplay.summary}</p>
                <ul className="check-list">
                  <li>Marketing and visibility decisions that support growth.</li>
                  <li>Technology choices that improve the operating system of the practice.</li>
                  <li>Team productivity and financial resilience as linked decisions.</li>
                </ul>
                <div className="button-row">
                  <a className="button button-primary" href={featuredReplay.href} target="_blank" rel="noreferrer">
                    Watch Replay
                  </a>
                  <Link className="button button-secondary button-dark" href="/marketing">
                    Review the Marketing Offer
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
            <span className="eyebrow text-accent">Archive</span>
            <h2>Recent VBI sessions grouped as a replay library, not a dated list.</h2>
          </div>
          <div className="grid-two">
            {webinars.map((item) => (
              <article className="card archive-card" key={item.title}>
                <img src={item.image} alt={item.title} />
                <span className="card-label">{item.date}</span>
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
                <a href={item.href} target="_blank" rel="noreferrer">
                  Open Replay
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow text-accent">Replay Visuals</span>
            <h2>Strong archive pages use visual hierarchy to signal depth, quality, and recency.</h2>
          </div>
          <div className="grid-three">
            {replaySnapshots.map((image, index) => (
              <article className="card archive-card" key={image}>
                <img src={image} alt={`Replay visual ${index + 1}`} />
                <h3>Archive imagery supporting replay discovery</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split-grid">
          <article className="card">
            <span className="eyebrow text-accent">Related Event Panels</span>
            <h2>Panels give the replay system a more current, recurring cadence.</h2>
            <p>
              Webinar replays remain valuable, but the Vimeo panel series adds more frequent topic
              coverage. That helps VBI feel active between larger webinar moments.
            </p>
            <div className="button-row">
              <Link className="button button-primary" href="/events">
                Explore All Panels
              </Link>
              <a className="button button-secondary" href={relatedPanel.href} target="_blank" rel="noreferrer">
                Watch a Featured Panel
              </a>
            </div>
          </article>

          <article className="card archive-card">
            <img src={relatedPanel.image} alt={relatedPanel.title} />
            <span className="card-label">{relatedPanel.date}</span>
            <h3>{relatedPanel.title}</h3>
            <p>{relatedPanel.summary}</p>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container split-grid">
          <article className="card">
            <span className="eyebrow text-accent">Why This Page Needed Work</span>
            <h2>Webinar archives decay fast unless the page is designed for replay value.</h2>
            <ul className="check-list">
              {replayBenefits.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <div className="page-cta">
            <div>
              <span className="eyebrow text-accent">Next Move</span>
              <h2>Use replays for education, then route serious prospects into strategy.</h2>
              <p>
                Replay content should support the learning journey while still creating a clear path
                into direct conversations about growth, marketing, and business strategy.
              </p>
            </div>
            <div className="cta-actions">
              <Link className="button button-primary" href="/contact">
                Contact the Team
              </Link>
              <Link className="button button-secondary" href="/events">
                Explore Event Panels
              </Link>
              <Link className="button button-secondary" href="/podcast">
                Explore the Podcast
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
