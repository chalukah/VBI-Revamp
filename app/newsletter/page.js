import Link from "next/link";
import NewsletterForm from "../components/NewsletterForm";
import { contactDetails } from "../lib/site-data";

export const metadata = {
  title: "Newsletter Integration | Veterinary Business Institute",
  description: "Subscribe to the VBI Newsletter for recurring practice growth insights.",
};

export default function NewsletterPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow text-accent">VBI Newsletter</span>
            <h1>
              Build a stronger <em>foundation.</em>
            </h1>
            <p className="hero-lead">
              Our automated email sequences and recurring newsletters deliver 
              no-fluff veterinary business ideas, podcast summaries, and 
              exclusive event invites straight to your inbox.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split-grid">
          <div className="section-copy">
             <span className="eyebrow text-accent">Newsletter Strategy</span>
             <h2>What happens after you subscribe?</h2>
             <p>Our automated sequence is designed not to spam, but to educate.</p>
             <ul className="check-list" style={{ marginTop: "1.5rem" }}>
               <li><strong>Weekly Summaries</strong> detailing our latest podcast drops.</li>
               <li><strong>Leadership Guides</strong> breaking down operations and culture.</li>
               <li><strong>Early Access</strong> to panels and webinar registration.</li>
             </ul>
          </div>

          <div className="form-wrapper">
             <NewsletterForm email={contactDetails[2].label} dark={true} />
             <p className="muted-text" style={{ marginTop: "1.5rem", fontSize: "0.85rem", textAlign: "center" }}>
               Your email is secure. Review our <Link href="/privacy-policy" style={{ textDecoration: "underline" }}>Privacy Policy</Link>.
             </p>
          </div>
        </div>
      </section>
    </>
  );
}
