import Link from "next/link";
import { withBasePath } from "../lib/base-path";
import { auditLink, marketingPillars, marketingPageLink } from "../lib/site-data";

const processSteps = [
  {
    index: "01",
    title: "Audit the current online presence",
    body: "The marketing process begins with a structured 4 to 6 hour review across the core factors shaping search visibility and local performance.",
  },
  {
    index: "02",
    title: "Analyze the local market and competition",
    body: "The offer becomes more persuasive when the page explains that recommendations come from local market context, not generic SEO theory.",
  },
  {
    index: "03",
    title: "Turn findings into a tailored plan",
    body: "Visitors need to know what happens after the call: a personalized roadmap, practical actions, and a team that stays accountable to the practice.",
  },
];

const proofPoints = [
  "4 to 6 hours of review built into the audit process.",
  "Six ranking factors used as the core audit language.",
  "16,000 plus testimonials referenced through Ekwa's wider proof system.",
];

export const metadata = {
  title: "Marketing | Veterinary Business Institute",
  description:
    "A clearer VBI marketing page built around the audit process, local search visibility, and practical growth support for veterinary practices.",
};

export default function MarketingPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow text-accent">Veterinary Marketing</span>
            <p className="hero-kicker">Audit-first marketing support built for veterinary practices that want better visibility.</p>
            <h1>
              Visibility strategy for practices that want more of the <em>right clients.</em>
            </h1>
            <p className="hero-lead">
              VBI's marketing offer is centered on a structured review of your practice's digital
              presence, your local competition, and the specific gaps affecting visibility,
              conversion, and long-term growth.
            </p>
            <div className="button-row">
              <a className="button button-primary" href={auditLink} target="_blank" rel="noreferrer">
                Book a Free Strategy Meeting
              </a>
              <a className="button button-secondary" href={marketingPageLink} target="_blank" rel="noreferrer">
                Open Live Marketing Page
              </a>
            </div>
          </div>

          <div className="image-frame">
            <img src={withBasePath("/assets/marketing-hero.png")} alt="Marketing analysis and performance visuals" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split-grid">
          <article className="card">
            <span className="eyebrow text-accent">Positioning</span>
            <h2>Why the audit path is stronger than a generic service pitch.</h2>
            <p>
              Veterinary owners do not need another abstract promise of better marketing. They need a
              clear explanation of what is being reviewed, what gaps will be identified, and why that
              matters in their local market.
            </p>
            <ul className="check-list">
              {proofPoints.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <div className="stat-grid">
            <article className="card stat-card">
              <strong>6</strong>
              <p>Ranking factors used as the structure of the audit conversation.</p>
            </article>
            <article className="card stat-card">
              <strong>4-6h</strong>
              <p>Time the team says it spends reviewing a practice's presence.</p>
            </article>
            <article className="card stat-card">
              <strong>VIP</strong>
              <p>Dedicated team positioning already present in the live offer.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow text-accent">Offer Architecture</span>
            <h2>The marketing offer is organized as a clearer conversion system.</h2>
          </div>
          <div className="grid-three">
            {marketingPillars.map((item) => (
              <article className="card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow text-accent">How the Audit Works</span>
            <h2>Visitors should understand the sequence before they commit to a call.</h2>
          </div>
          <div className="step-grid">
            {processSteps.map((item) => (
              <article className="card step-card" key={item.index}>
                <span className="step-index">{item.index}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container page-cta">
          <div>
            <span className="eyebrow text-accent">Conversion Path</span>
            <h2>Research-led content should end with a lower-friction strategy conversation.</h2>
            <p>
              The goal is simple: explain the problem clearly, prove the process, and make the audit
              feel like the natural next step for a practice that wants better visibility.
            </p>
          </div>
          <div className="cta-actions">
            <a className="button button-primary" href={auditLink} target="_blank" rel="noreferrer">
              Request the Audit
            </a>
            <Link className="button button-secondary" href="/contact">
              Ask a Question First
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
