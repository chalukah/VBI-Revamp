import Link from "next/link";
import { withBasePath } from "../lib/base-path";
import {
  auditLink,
  contactAddress,
  contactDetails,
  footerExploreLinks,
  footerResourceLinks,
  socialLinks,
  topBarItems,
} from "../lib/site-data";

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-cta-band">
        <div className="footer-cta-copy">
          <span className="eyebrow text-accent">Stay Connected</span>
          <h2>Stay connected with the content, conversations, and strategy that move veterinary practices forward.</h2>
          <p>
            Start with the latest podcast conversation or event panel, then move into webinar replays
            and marketing strategy when your practice is ready for the next step.
          </p>
        </div>
        <div className="footer-cta-actions">
          <a className="button button-primary" href={topBarItems[0].href} target="_blank" rel="noreferrer">
            Latest Podcast
          </a>
          <a className="button button-secondary" href={topBarItems[1].href} target="_blank" rel="noreferrer">
            Latest Event Panel
          </a>
          <a className="button button-secondary" href={auditLink} target="_blank" rel="noreferrer">
            Book the Audit
          </a>
        </div>
      </div>

      <div className="container footer-grid">
        <div className="footer-brand">
          <img src={withBasePath("/assets/logo.svg")} alt="Veterinary Business Institute" />
          <p>
            Veterinary Business Institute is a resource hub for veterinarians focused on business
            growth, leadership, operations, culture, client experience, and digital visibility.
          </p>
        </div>

        <div>
          <h3>Contact</h3>
          <ul className="footer-list">
            {contactDetails.map((item) => (
              <li key={item.label}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
            <li>{contactAddress}</li>
          </ul>
        </div>

        <div>
          <h3>Explore</h3>
          <ul className="footer-list">
            {footerExploreLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3>Resources</h3>
          <ul className="footer-list">
            {footerResourceLinks.map((item) => (
              <li key={item.label}>
                <a href={item.href} target="_blank" rel="noreferrer">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>Copyright {year} Veterinary Business Institute. All rights reserved.</span>
        <div className="footer-bottom-links">
          {socialLinks.map((item) => (
            <a href={item.href} key={item.label} target="_blank" rel="noreferrer">
              {item.label}
            </a>
          ))}
          <a href="https://www.veterinarybusinessinstitute.com/privacy-policy/" target="_blank" rel="noreferrer">
            Privacy Policy
          </a>
          <a
            href="https://www.veterinarybusinessinstitute.com/accessibility-statement/"
            target="_blank"
            rel="noreferrer"
          >
            Accessibility Statement
          </a>
        </div>
      </div>
    </footer>
  );
}
