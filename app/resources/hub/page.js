import Link from "next/link";
import LeadMagnetForm from "../../components/LeadMagnetForm";

export const metadata = {
  title: "Lead Magnet Hub | Veterinary Business Institute",
  description: "Free downloadable resources, templates, and guides for veterinary practices.",
};

const magnets = [
  {
    title: "10-Step Associate Retention Playbook",
    label: "Team Culture",
    body: "A comprehensive PDF guide focusing on onboarding, continuous feedback, and compensation models that actually keep great veterinarians."
  },
  {
    title: "The Local SEO Checklist",
    label: "Marketing",
    body: "Before you spend on ads, make sure your foundation is solid. Download the 25-point checklist we use during our strategy audits."
  },
  {
    title: "Cybersecurity Protocol Template",
    label: "Risk & Compliance",
    body: "An adaptable Word document to help you define basic security hygiene for your front desk and clinical staff."
  }
];

export default function HubPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow text-accent">Resources</span>
            <h1>
              Free Downloads & <em>Guides.</em>
            </h1>
            <p className="hero-lead">
              We translate our podcast ideas and event panels into actionable, 
              downloadable templates and playbooks. Access our central hub of 
              free resources below.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid-three">
          {magnets.map((mag) => (
             <article className="card" key={mag.title}>
               <span className="card-label">{mag.label}</span>
               <h3>{mag.title}</h3>
               <p>{mag.body}</p>
               <LeadMagnetForm title={mag.title} />
             </article>
          ))}
        </div>
      </section>
    </>
  );
}
