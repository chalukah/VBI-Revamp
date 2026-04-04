import Link from "next/link";
import { auditLink } from "../lib/site-data";

export const metadata = {
  title: "Book a Free Marketing Strategy Meeting | Veterinary Business Institute",
  description:
    "Schedule a free 60-minute marketing strategy meeting. Our team will invest 4–5 hours preparing a customised plan for your veterinary practice.",
};

const bullets = [
  "Attract high-quality new clients to your practice",
  "Rank #1 on Google within your local community",
  "Increase the number of new client calls consistently, month after month",
];

const steps = [
  { number: "01", label: "Select a date" },
  { number: "02", label: "Select a time" },
  { number: "03", label: "Fill in your details" },
  { number: "04", label: "Confirm your booking" },
];

export default function ConsultationPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="consult-page-hero">
        <div className="container">
          <div className="consult-hero-inner">
            <span className="consult-hero-pill">Free &middot; 60 Minutes &middot; No Commitments</span>
            <h1 className="consult-hero-h1">
              Book a Free <em>Marketing Strategy Meeting</em>
            </h1>
            <p className="consult-hero-sub">
              Learn how you can leverage digital marketing to grow your
              veterinary practice — at no cost, with no commitments attached.
            </p>
            <div className="consult-hero-badge">
              <div className="consult-badge-left">
                <span className="consult-badge-num">4–5</span>
                <span className="consult-badge-unit">hours</span>
              </div>
              <p className="consult-badge-text">
                Lila Stone &amp; her team invest 4–5 hours preparing a
                customised marketing plan for your practice <strong>before</strong> the call.
              </p>
            </div>
            <a
              className="button button-primary consult-hero-cta"
              href={auditLink}
              target="_blank"
              rel="noreferrer"
            >
              Book Your Free Meeting &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* ── What you'll get ── */}
      <section className="consult-section">
        <div className="container consult-split">

          {/* Left — value props */}
          <div className="consult-value">
            <span className="eyebrow text-accent">What We&rsquo;ll Cover</span>
            <h2 className="consult-h2">A plan built around your practice</h2>
            <p className="consult-body">
              Join Lila Stone, Marketing Strategy Advisor at Ekwa Marketing, for
              an informative 60-minute session. Lila and her team will invest 4
              to 5 hours prior to your meeting to develop a customised marketing
              plan tailored specifically to your veterinary practice.
            </p>
            <p className="consult-body">
              This plan will help you understand your current online presence
              and provide clear recommendations on:
            </p>

            <ul className="consult-bullets">
              {bullets.map((b) => (
                <li key={b}>
                  <span className="consult-check" aria-hidden="true">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M3 7.5L5.5 10L11 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  {b}
                </li>
              ))}
            </ul>

            <div className="consult-promise">
              <strong>After the meeting</strong>, Lila will follow up with a
              detailed report that includes the full plan — so you can implement
              these recommendations in your practice right away.
            </div>
          </div>

          {/* Right — booking card */}
          <div className="consult-booking-wrap">
            <div className="consult-booking-card">
              <div className="consult-booking-header">
                <span className="consult-booking-tag">How to Book</span>
              </div>
              <div className="consult-steps-grid">
                {steps.map((s) => (
                  <div className="consult-step" key={s.number}>
                    <span className="consult-step-num">{s.number}</span>
                    <span className="consult-step-label">{s.label}</span>
                  </div>
                ))}
              </div>
              <div className="consult-booking-divider" />
              <p className="consult-booking-desc">
                Click below to open the scheduling calendar. Pick a slot that
                works for you and you&rsquo;ll receive a confirmation instantly.
              </p>
              <a
                className="button button-primary consult-booking-btn"
                href={auditLink}
                target="_blank"
                rel="noreferrer"
              >
                Open Scheduling Calendar &rarr;
              </a>
              <p className="consult-booking-note">
                This invaluable opportunity will empower you to enhance your
                online presence and attract a steady stream of new clients.
                Schedule your meeting today!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact strip ── */}
      <section className="consult-contact-section">
        <div className="container">
          <p className="consult-contact-heading">Have a question?</p>
          <div className="consult-contact-grid">
            <a className="consult-contact-card" href="tel:+18335231845">
              <span className="consult-contact-icon-wrap">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M2 3.5C2 2.67 2.67 2 3.5 2H6.6C6.95 2 7.26 2.22 7.38 2.55L8.62 5.89C8.72 6.16 8.66 6.47 8.46 6.68L6.94 8.43C7.95 10.55 9.45 12.05 11.57 13.06L13.32 11.54C13.53 11.34 13.84 11.28 14.11 11.38L17.45 12.62C17.78 12.74 18 13.05 18 13.4V16.5C18 17.33 17.33 18 16.5 18C8.5 18 2 11.5 2 3.5Z" stroke="currentColor" strokeWidth="1.5" fill="none"/></svg>
              </span>
              <span className="consult-contact-label">(833) 523-1845</span>
            </a>
            <a className="consult-contact-card" href="tel:+12133251745">
              <span className="consult-contact-icon-wrap">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M2 3.5C2 2.67 2.67 2 3.5 2H6.6C6.95 2 7.26 2.22 7.38 2.55L8.62 5.89C8.72 6.16 8.66 6.47 8.46 6.68L6.94 8.43C7.95 10.55 9.45 12.05 11.57 13.06L13.32 11.54C13.53 11.34 13.84 11.28 14.11 11.38L17.45 12.62C17.78 12.74 18 13.05 18 13.4V16.5C18 17.33 17.33 18 16.5 18C8.5 18 2 11.5 2 3.5Z" stroke="currentColor" strokeWidth="1.5" fill="none"/></svg>
              </span>
              <span className="consult-contact-label">(213) 325-1745</span>
            </a>
            <a className="consult-contact-card" href="mailto:team@veterinarybusinessinstitute.com">
              <span className="consult-contact-icon-wrap">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="2" y="4" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none"/><path d="M2 6L10 11L18 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
              </span>
              <span className="consult-contact-label">team@veterinarybusinessinstitute.com</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
