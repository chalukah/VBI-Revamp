import Link from "next/link";
import { auditLink } from "../lib/site-data";

export const metadata = {
  title: "Case Studies | Veterinary Business Institute",
  description: "Detailed breakdowns of how VBI coaching and Ekwa marketing audits impact veterinary practices.",
};

const caseStudies = [
  {
    clinic: "Riverside Small Animal Hospital",
    challenge: "Struggling with local search visibility and a 20% drop in new patient acquisition over 12 months.",
    solution: "A full Ekwa Marketing Audit leading to targeted Local SEO restructuring and mobile-first speed optimizations.",
    result: "145% increase in organic new patient bookings within 6 months.",
    metric: "+145%",
    metricLabel: "New Patient Bookings",
  },
  {
    clinic: "Paws & Care Veterinary Clinic (Multi-Location)",
    challenge: "High turnover among associate veterinarians and front-desk logjams resulting in poor client experience scores.",
    solution: "Implementation of the VBI CSM Coaching playbook focusing on associate compensation restructuring and simplified SOPs.",
    result: "Reduced clinical turnover to zero over 18 months, with a 35% increase in operational efficiency.",
    metric: "0%",
    metricLabel: "DVM Turnover",
  }
];

export default function CaseStudiesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow text-accent">Proof of Concept</span>
            <h1>
              Case <em>Studies.</em>
            </h1>
            <p className="hero-lead">
              While our <Link href="/reviews" style={{textDecoration: "underline"}}>Reviews page</Link> 
              shares subjective experiences, these case studies break down the hard 
              metrics behind our coaching (CSM) and marketing (MSM) playbooks.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
          {caseStudies.map((cs) => (
             <article key={cs.clinic} className="card" style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "2rem", alignItems: "center" }}>
               <div>
                  <h3>{cs.clinic}</h3>
                  <div style={{ marginTop: "1.5rem" }}>
                    <strong>The Challenge:</strong>
                    <p className="muted-text" style={{ marginBottom: "1rem" }}>{cs.challenge}</p>
                    <strong>The Strategy:</strong>
                    <p className="muted-text" style={{ marginBottom: "1rem" }}>{cs.solution}</p>
                    <strong>The Result:</strong>
                    <p className="text-accent" style={{ fontWeight: "600" }}>{cs.result}</p>
                  </div>
               </div>
               
               <div style={{ backgroundColor: "var(--background-muted)", padding: "2rem", borderRadius: "12px", textAlign: "center", minWidth: "200px" }}>
                 <span style={{ display: "block", fontSize: "3rem", fontWeight: "700", color: "var(--ink-700)", lineHeight: "1" }}>{cs.metric}</span>
                 <span className="eyebrow" style={{ marginTop: "0.5rem", display: "block" }}>{cs.metricLabel}</span>
               </div>
             </article>
          ))}
        </div>
      </section>

      <section className="section section-muted">
        <div className="container page-cta">
          <div>
            <span className="eyebrow text-accent">Your Practice</span>
            <h2>What are your target metrics?</h2>
            <p>Let's find out what the numbers say about your market position.</p>
          </div>
          <div className="cta-actions">
            <a className="button button-primary" href={auditLink} target="_blank" rel="noreferrer">
              Start Your Visibility Audit
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
