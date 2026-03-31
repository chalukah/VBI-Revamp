import Link from "next/link";
import ContactForm from "../components/ContactForm";
import { withBasePath } from "../lib/base-path";
import { auditLink, contactAddress, contactDetails, contactReasons, socialLinks } from "../lib/site-data";

const nextSteps = [
  {
    index: "01",
    title: "Choose the right entry point",
    body: "If the visitor already wants a marketing review, route them to the free strategy meeting. If not, let them contact the team directly without friction.",
  },
  {
    index: "02",
    title: "Clarify the reason for reaching out",
    body: "Podcast guests, webinar access, sponsorships, strategy questions, and general inquiries should each feel welcome here.",
  },
  {
    index: "03",
    title: "Guide them to the next best page",
    body: "A stronger contact page should still point back into the podcast, webinar, and marketing routes when the contact is not the first best step.",
  },
];

export const metadata = {
  title: "Contact | Veterinary Business Institute",
  description:
    "Contact Veterinary Business Institute for podcast opportunities, webinar questions, partnerships, and veterinary marketing conversations.",
};

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow text-accent">Contact the Team</span>
            <p className="hero-kicker">Start the right conversation with the VBI team.</p>
            <h1>
              Make the next conversation easier to <em>start.</em>
            </h1>
            <p className="hero-lead">
              Use this page for podcast requests, webinar questions, partnership conversations,
              speaking opportunities, and strategy inquiries tied to practice growth.
            </p>
            <div className="button-row">
              <a className="button button-secondary" href={auditLink} target="_blank" rel="noreferrer">
                Book a Strategy Meeting
              </a>
              <a className="button button-secondary" href="mailto:team@veterinarybusinessinstitute.com">
                Email Directly
              </a>
            </div>
          </div>

          <div style={{ position: "relative", zIndex: 10 }}>
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          {contactDetails.map((item) => (
            <article className="card contact-card" key={item.label}>
              <span className="card-label">Direct Contact</span>
              <strong>{item.label}</strong>
              <a href={item.href}>{item.href.startsWith("mailto:") ? "Send email" : "Call now"}</a>
            </article>
          ))}
          <article className="card contact-card">
            <span className="card-label">Office</span>
            <strong>{contactAddress}</strong>
            <p>Reach out here when you need a direct response from the VBI team.</p>
          </article>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow text-accent">Why Someone Might Reach Out</span>
            <h2>The page should help visitors recognize their reason for contacting VBI.</h2>
          </div>
          <div className="grid-three">
            {contactReasons.map((item) => (
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
            <span className="eyebrow text-accent">Next Steps</span>
            <h2>Make the contact route part of the journey, not the end of it.</h2>
          </div>
          <div className="step-grid">
            {nextSteps.map((item) => (
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
            <span className="eyebrow text-accent">Follow VBI</span>
            <h2>Keep the relationship going even when the visitor is not ready to contact yet.</h2>
            <p>
              Not every visitor is ready for a direct conversation. These lighter next steps keep the
              page connected to the broader VBI ecosystem.
            </p>
          </div>
          <div className="cta-actions">
            <Link className="button button-secondary" href="/podcast">
              Visit the Podcast
            </Link>
            <Link className="button button-secondary" href="/events">
              Visit Event Panels
            </Link>
            <Link className="button button-secondary" href="/webinars">
              Watch Replays
            </Link>
            <Link className="button button-secondary" href="/marketing">
              See Marketing
            </Link>
            {socialLinks.map((item) => (
              <a className="button button-secondary" href={item.href} key={item.label} target="_blank" rel="noreferrer">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
