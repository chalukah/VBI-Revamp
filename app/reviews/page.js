import Link from "next/link";
import { withBasePath } from "../lib/base-path";
import { auditLink, homepageMetrics } from "../lib/site-data";

const reviewHighlights = [
  {
    source: "Veterinary Practice Owner",
    quote:
      "The conversations feel practical instead of abstract. They help our team think more clearly about growth, leadership, and what actually changes outcomes.",
  },
  {
    source: "Hospital Manager",
    quote:
      "The panel format makes it easier to hear real operating perspectives from different voices in the industry rather than one narrow opinion.",
  },
  {
    source: "Veterinary Team Lead",
    quote:
      "VBI connects the strategic side of practice growth with the day-to-day realities teams are dealing with right now.",
  },
];

const proofPoints = [
  {
    title: "Clearer business framing",
    body: "Listeners return when the content helps them connect staffing, culture, client experience, and marketing into one business picture.",
  },
  {
    title: "Useful guest conversations",
    body: "The strongest responses come when guests share usable patterns, not generic inspiration or surface-level trends.",
  },
  {
    title: "Replay value",
    body: "Panels and webinars keep working because teams can revisit practical ideas after the live event is over.",
  },
];

export const metadata = {
  title: "Reviews | Veterinary Business Institute",
  description:
    "See how veterinary leaders, managers, and teams describe the value of the Veterinary Business Institute platform.",
};

export default function ReviewsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow text-accent">Reviews</span>
            <p className="hero-kicker">What veterinary teams value in the institute.</p>
            <h1>
              Feedback that points to what makes the platform <em>useful.</em>
            </h1>
            <p className="hero-lead">
              Reviews matter because they show whether the content is helping practices think better
              about leadership, operations, client experience, marketing, and growth.
            </p>
            <div className="button-row">
              <Link className="button button-primary" href="/events">
                Explore Event Panels
              </Link>
              <Link className="button button-secondary" href="/podcast">
                Visit the Podcast
              </Link>
            </div>
          </div>

          <div className="image-frame">
            <img src={withBasePath("/assets/about-team.jpg")} alt="Veterinary professionals reflecting on shared learning" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid-three">
          {reviewHighlights.map((item) => (
            <article className="card" key={item.source}>
              <span className="card-label">{item.source}</span>
              <p>"{item.quote}"</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-muted">
        <div className="container split-grid">
          <div className="section-copy">
            <span className="eyebrow text-accent">Why It Resonates</span>
            <h2>The strongest reviews point back to practical relevance.</h2>
            <p>
              Veterinary teams respond best when the material is specific enough to influence real
              decisions and broad enough to connect people, systems, visibility, and long-term growth.
            </p>
            <div className="button-row">
              <a className="button button-secondary" href={auditLink} target="_blank" rel="noreferrer">
                Book a Strategy Meeting
              </a>
            </div>
          </div>

          <div className="stat-grid">
            {homepageMetrics.map((item) => (
              <article className="card stat-card" key={item.label}>
                <strong>{item.value}</strong>
                <p>{item.label}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow text-accent">Patterns</span>
            <h2>Three qualities people keep responding to across the platform.</h2>
          </div>
          <div className="grid-three">
            {proofPoints.map((item) => (
              <article className="card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
