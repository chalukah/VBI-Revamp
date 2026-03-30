import Link from "next/link";
import { withBasePath } from "../lib/base-path";
import { auditLink, contactDetails } from "../lib/site-data";

const opportunities = [
  {
    title: "Podcast guest conversations",
    body: "Share perspective on leadership, staffing, marketing, ownership, technology, or client experience in veterinary care.",
  },
  {
    title: "Panel participation",
    body: "Join recurring event panels that help veterinary teams hear multiple practical viewpoints around current business issues.",
  },
  {
    title: "Speaker invitations",
    body: "Connect with VBI for webinar appearances, educational sessions, and collaborative thought-leadership opportunities.",
  },
];

export const metadata = {
  title: "Guest / Speaker | Veterinary Business Institute",
  description:
    "Explore podcast guest, speaker, and collaborative educational opportunities with Veterinary Business Institute.",
};

export default function GuestSpeakerPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow text-accent">Guest / Speaker</span>
            <p className="hero-kicker">Educational collaborations for the veterinary industry.</p>
            <h1>
              Bring the right voice into the next veterinary <em>conversation.</em>
            </h1>
            <p className="hero-lead">
              Use this route for podcast guest suggestions, panel participation, webinar
              collaboration, and speaker invitations connected to veterinary business education.
            </p>
            <div className="button-row">
              <Link className="button button-primary" href="/contact">
                Contact the Team
              </Link>
              <a className="button button-secondary" href={`mailto:${contactDetails[2].label}`}>
                Email a Guest Idea
              </a>
            </div>
          </div>

          <div className="image-frame">
            <img src={withBasePath("/assets/about-speaker.jpg")} alt="Speaker presenting to a veterinary audience" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid-three">
          {opportunities.map((item) => (
            <article className="card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-muted">
        <div className="container page-cta">
          <div>
            <span className="eyebrow text-accent">Next Step</span>
            <h2>Make the invitation concrete and useful.</h2>
            <p>
              The best outreach includes a clear topic, intended audience, preferred format, and why
              the conversation would matter to veterinary teams right now.
            </p>
          </div>
          <div className="cta-actions">
            <Link className="button button-secondary" href="/podcast">
              Review the Podcast
            </Link>
            <Link className="button button-secondary" href="/events">
              Explore Event Panels
            </Link>
            <a className="button button-primary" href={auditLink} target="_blank" rel="noreferrer">
              Book a Strategy Meeting
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
