import Link from "next/link";
import { withBasePath } from "../lib/base-path";
import { auditLink, homepageMetrics } from "../lib/site-data";

const principles = [
  {
    title: "Business education made practical",
    body: "VBI translates business concepts into practical guidance for veterinary owners, managers, and teams working through real operating decisions.",
  },
  {
    title: "A stronger story around VBI and Ekwa",
    body: "Instead of leaving the relationship implied in the footer, the page now frames VBI as a focused education brand supported by deeper marketing experience.",
  },
  {
    title: "Better reasons to keep exploring",
    body: "Visitors can move naturally from the institute story into podcast listening, webinar replays, event panels, and strategy support.",
  },
];

const storyPoints = [
  "Leadership, retention, and staffing decisions are now central to veterinary growth.",
  "Marketing and visibility matter because a great practice still needs to be found.",
  "Technology and client experience are part of business strategy, not side topics.",
];

export const metadata = {
  title: "About | Veterinary Business Institute",
  description:
    "Learn how Veterinary Business Institute connects podcast conversations, webinar education, and marketing guidance for veterinary leaders.",
};

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow text-accent">About Veterinary Business Institute</span>
            <p className="hero-kicker">Practical business education for a changing veterinary market.</p>
            <h1>
              Built for veterinarians who want a stronger <em>business.</em>
            </h1>
            <p className="hero-lead">
              VBI exists to help veterinary professionals grow past generic advice and into practical
              business education around leadership, culture, operations, marketing, and long-term
              practice resilience.
            </p>
            <div className="button-row">
              <Link className="button button-primary" href="/podcast">
                Explore the Podcast
              </Link>
              <Link className="button button-secondary" href="/events">
                Explore Event Panels
              </Link>
              <Link className="button button-secondary" href="/webinars">
                Watch Webinar Replays
              </Link>
            </div>
          </div>

          <div className="image-frame">
            <img src={withBasePath("/assets/about-hero.jpg")} alt="Veterinary team members in conversation" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split-grid">
          <div className="section-copy">
            <span className="eyebrow text-accent">Mission</span>
            <h2>Bridge the gap between veterinary medicine and better business judgment.</h2>
            <p>
              VBI exists for veterinary professionals who want better business judgment around
              leadership, staffing, client experience, marketing, technology, and long-term practice
              resilience.
            </p>
            <p>
              The goal is not abstract inspiration. It is usable insight for practice owners,
              associates, managers, and teams working through staffing pressure, growth decisions,
              client expectations, and financial complexity.
            </p>
            <ul className="check-list">
              {storyPoints.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
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

      <section className="section section-muted">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow text-accent">What the Institute Delivers</span>
            <h2>Three strengths that make VBI more useful for modern veterinary practices.</h2>
          </div>
          <div className="grid-three">
            {principles.map((item) => (
              <article className="card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container detail-grid">
          <article className="card">
            <span className="eyebrow text-accent">Platform Value</span>
            <h2>Why VBI deserves its own identity.</h2>
            <p>
              VBI is more than a podcast. It is a broader educational layer around veterinary
              business growth, giving practices one place to engage with interviews, webinars,
              recurring panel discussions, and strategic guidance.
            </p>
            <p>
              That means clearer routes, more explicit topic coverage, better use of archive content,
              and stronger transitions into strategy support when a visitor is ready for help.
            </p>
            <div className="button-row">
              <Link className="button button-secondary" href="/marketing">
                See the Marketing Offer
              </Link>
            </div>
          </article>

          <div className="card card-visual">
            <img src={withBasePath("/assets/about-team.jpg")} alt="Veterinary professionals and business education imagery" />
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container detail-grid">
          <div className="card card-visual">
            <img src={withBasePath("/assets/about-speaker.jpg")} alt="Speaker presenting to a veterinary audience" />
          </div>

          <article className="card">
            <span className="eyebrow text-accent">Next Step</span>
            <h2>Education is the front door. Clear action paths keep the site working.</h2>
            <p>
              The strongest About pages do not stop at biography. They move visitors toward the next
              useful action. For VBI, that means listening, watching, exploring strategy, or contacting
              the team with a concrete reason.
            </p>
            <div className="button-row">
              <Link className="button button-primary" href="/contact">
                Contact the Team
              </Link>
              <a className="button button-secondary" href={auditLink} target="_blank" rel="noreferrer">
                Book a Strategy Meeting
              </a>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
