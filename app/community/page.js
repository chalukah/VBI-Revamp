import Link from "next/link";
import CommunityJoinForm from "./CommunityJoinForm";
import styles from "./page.module.css";
import {
  contactDetails,
  episodes,
  eventPanels,
  hosts,
  socialLinks,
  webinars,
} from "../lib/site-data";

const communityBenefits = [
  {
    title: "Podcast-first updates",
    body: "Stay close to the recurring VBI conversations so new episodes, interviews, and strategic ideas never disappear into the archive.",
  },
  {
    title: "Panel and webinar access",
    body: "Use the hub as the easiest path into fresh event panels, replay-ready education, and the strongest recent discussions across the platform.",
  },
  {
    title: "Practical resources",
    body: "Move from passive listening into action with curated routes into marketing guidance, team ideas, and follow-on learning.",
  },
  {
    title: "Signals worth sharing",
    body: "Give practice owners, managers, and leadership teams a single place to point people when they need useful business education.",
  },
  {
    title: "Cross-channel visibility",
    body: "The hub connects podcast, events, replays, and community touchpoints so visitors can keep moving instead of hitting a dead end.",
  },
  {
    title: "Direct connection to VBI",
    body: "Use the community route as the softer entry point for collaboration, follow-up questions, and staying in view between bigger decisions.",
  },
];

const communityAudience = [
  {
    title: "Practice owners and partners",
    body: "People making growth, staffing, profitability, and long-term leadership decisions for the whole business.",
  },
  {
    title: "Hospital managers and team leads",
    body: "Operators who need clear ideas around communication, culture, systems, and everyday execution.",
  },
  {
    title: "Marketing and client-experience teams",
    body: "Teams working on trust, visibility, messaging, and how the practice shows up online and in person.",
  },
  {
    title: "Growth-minded veterinary professionals",
    body: "People who want sharper business context, not just clinical perspective, as they step into larger responsibility.",
  },
];

const communitySteps = [
  {
    index: "01",
    title: "Start with a strong content stream",
    body: "Begin with the latest podcast, panel, or webinar replay so the community relationship is grounded in useful ideas.",
  },
  {
    index: "02",
    title: "Pick the route that fits your team",
    body: "Use the hub to decide whether your next move is leadership education, replay viewing, marketing support, or direct outreach.",
  },
  {
    index: "03",
    title: "Stay connected between big decisions",
    body: "Return through episodes, updates, and shared resources so VBI keeps supporting the practice after the first visit.",
  },
];

export const metadata = {
  title: "Community Hub | Veterinary Business Institute",
  description:
    "A VBI community hub for veterinary leaders, managers, and growth-minded teams following podcasts, panels, webinar replays, and practical business education.",
};

export default function CommunityPage() {
  const featuredEpisode = episodes[0];
  const featuredPanel = eventPanels[0];
  const featuredReplay = webinars[0];
  const featuredHost = hosts[0];
  const contactEmail = contactDetails[2].label;

  return (
    <>
      <section className="page-hero">
        <div className={`container hero-grid ${styles.heroGrid}`}>
          <div className="hero-copy">
            <span className="eyebrow text-accent">VBI Community Hub</span>
            <p className="hero-kicker">Free to follow. Built for veterinary leaders who want stronger business conversations.</p>
            <h1>
              A community layer for veterinary teams building <em>stronger practices.</em>
            </h1>
            <p className="hero-lead">
              Veterinary Business Institute works best when podcast episodes, panel replays,
              webinar education, and follow-on conversations all point to the same next step.
              This hub gives owners, managers, and growth-minded teams one place to stay connected
              to that flow.
            </p>
            <div className="button-row">
              <a className="button button-primary" href="#join-hub">
                Join the Hub
              </a>
              <Link className="button button-secondary" href="/podcast">
                Start with the Podcast
              </Link>
            </div>
          </div>

          <aside className={styles.heroPanel}>
            <div className={styles.heroPanelHeader}>
              <span className="card-label">What the Hub Connects</span>
              <strong>One route into the full VBI ecosystem</strong>
            </div>

            <div className={styles.metricRow}>
              <article className={styles.metricCard}>
                <span className={styles.metricValue}>{episodes.length}+</span>
                <span className={styles.metricLabel}>featured podcast tracks</span>
              </article>
              <article className={styles.metricCard}>
                <span className={styles.metricValue}>{eventPanels.length}</span>
                <span className={styles.metricLabel}>event panel replays</span>
              </article>
              <article className={styles.metricCard}>
                <span className={styles.metricValue}>{webinars.length}</span>
                <span className={styles.metricLabel}>webinar replay paths</span>
              </article>
            </div>

            <div className={styles.signalStack}>
              <article className={styles.signalItem}>
                <span className="card-label">Latest Podcast</span>
                <strong>{featuredEpisode.title}</strong>
                <p>{featuredEpisode.summary}</p>
              </article>
              <article className={styles.signalItem}>
                <span className="card-label">Latest Panel</span>
                <strong>{featuredPanel.title}</strong>
                <p>{featuredPanel.summary}</p>
              </article>
              <article className={styles.signalItem}>
                <span className="card-label">Latest Replay</span>
                <strong>{featuredReplay.title}</strong>
                <p>{featuredReplay.summary}</p>
              </article>
            </div>
          </aside>
        </div>
      </section>

      <section className="section section-muted" id="join-hub">
        <div className={`container ${styles.topJoinGrid}`}>
          <CommunityJoinForm
            email={contactEmail}
            title="Join the VBI community flow"
            description="Start here if you want ongoing access to the strongest VBI conversations, replay-ready education, and future member-style updates."
            buttonLabel="Join the Hub"
            note="Instant access is currently handled through the VBI team. No payment step. No generic funnel."
          />

          <article className={`card ${styles.topJoinSupport}`}>
            <span className="eyebrow text-accent">Why Join Now</span>
            <h2>Use one entry point instead of asking visitors to assemble the platform themselves.</h2>
            <ul className="check-list">
              <li>Follow new episodes, panels, and replays from one route.</li>
              <li>Give your team a clear page to bookmark and revisit.</li>
              <li>Make it easier to move from content into direct conversation.</li>
              <li>Build a stronger VBI relationship before a bigger marketing or strategy decision.</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow text-accent">What You Get</span>
            <h2>A member-style hub without the scattered experience.</h2>
            <p>
              The goal is not to add noise. It is to make the strongest VBI ideas easier to find,
              easier to revisit, and easier to share across the people shaping the practice.
            </p>
          </div>
          <div className="grid-three">
            {communityBenefits.map((item) => (
              <article className="card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container split-grid">
          <div className="section-copy">
            <span className="eyebrow text-accent">Who It Serves</span>
            <h2>The hub is for veterinary people who think beyond the next task.</h2>
            <p>
              This page should feel relevant to owners, managers, and team leaders who see the
              practice as a business that needs stronger systems, clearer leadership, and better
              long-term visibility.
            </p>
            <p>
              It is not a random social feed. It is a structured access point into the VBI content
              system and the conversations around it.
            </p>
          </div>

          <div className="grid-two">
            {communityAudience.map((item) => (
              <article className="card route-card" key={item.title}>
                <span className="card-label">Audience</span>
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
            <span className="eyebrow text-accent">How It Works</span>
            <h2>Three simple moves keep the community useful.</h2>
          </div>
          <div className="step-grid">
            {communitySteps.map((item) => (
              <article className="card step-card" key={item.index}>
                <span className="step-index">{item.index}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className={`container ${styles.joinGrid}`}>
          <article className={`card card-dark ${styles.joinCard}`}>
            <span className="eyebrow text-accent">A Message from VBI</span>
            <h2>Stay close to the conversations shaping veterinary growth.</h2>
            <p>
              Hub access currently routes through the VBI team. If you want to stay connected to
              new podcast episodes, panel releases, webinar replays, and future member-style
              updates, this is the cleanest place to raise your hand.
            </p>

            <div className={styles.joinList}>
              <div className={styles.joinItem}>
                <strong>Who should join</strong>
                <span>Owners, managers, marketers, speakers, and veterinary professionals building stronger businesses.</span>
              </div>
              <div className={styles.joinItem}>
                <strong>What to expect</strong>
                <span>Recurring updates, better discovery across the platform, and clearer paths into the right content.</span>
              </div>
              <div className={styles.joinItem}>
                <strong>How to start</strong>
                <span>Contact the team directly or begin with the podcast and panel archive while the fuller member flow expands.</span>
              </div>
            </div>

            <div className="button-row">
              <Link className="button button-primary" href="/contact">
                Request Access
              </Link>
              <a className="button button-secondary button-dark" href={contactDetails[2].href}>
                Email the Team
              </a>
            </div>
          </article>

          <aside className={`card ${styles.founderCard}`}>
            <div className={styles.founderHeader}>
              <img src={featuredHost.image} alt={featuredHost.name} className={styles.founderImage} />
              <div>
                <span className="card-label">Lead Voice</span>
                <h3>{featuredHost.name}</h3>
                <p className={styles.founderRole}>{featuredHost.role}</p>
              </div>
            </div>
            <p className={styles.founderQuote}>
              The strongest veterinary businesses do not grow from isolated tactics. They grow when
              leadership, team culture, marketing, operations, and client experience start moving in
              the same direction.
            </p>
            <p>
              The community hub gives VBI a place to keep those ideas circulating between episodes,
              replays, and the next practical decision inside the practice.
            </p>
            <div className={styles.socialRow}>
              {socialLinks.map((item) => (
                <a href={item.href} key={item.label} target="_blank" rel="noreferrer">
                  {item.label}
                </a>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className={`container ${styles.followSection}`}>
          <div className="section-heading">
            <span className="eyebrow text-accent">Stay Connected</span>
            <h2>Follow VBI everywhere the conversation keeps moving.</h2>
            <p>
              Social is useful when it supports the main platform. Use these channels to stay aware
              of new releases, event reminders, and the next place VBI is showing up.
            </p>
          </div>

          <div className={styles.followGrid}>
            {socialLinks.map((item) => (
              <a className={`card ${styles.followCard}`} href={item.href} key={item.label} target="_blank" rel="noreferrer">
                <span className="card-label">Follow</span>
                <h3>{item.label}</h3>
                <p>Keep VBI in view through {item.label} updates, new content drops, and recurring business signals.</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className={`container ${styles.bottomJoinGrid}`}>
          <div className={styles.bottomJoinCopy}>
            <span className="eyebrow text-accent">Free Community Access</span>
            <h2>Create your VBI connection point.</h2>
            <p>
              Use this second signup block the way the reference page does: as the final invitation
              for visitors who made it all the way through and now want a clean next step.
            </p>
            <div className="cta-actions">
              <Link className="button button-secondary" href="/podcast">
                Explore Podcast
              </Link>
              <Link className="button button-secondary" href="/events">
                Explore Panels
              </Link>
              <Link className="button button-secondary" href="/webinars">
                Explore Replays
              </Link>
              <Link className="button button-primary" href="/contact">
                Contact VBI
              </Link>
            </div>
          </div>

          <CommunityJoinForm
            email={contactEmail}
            title="Create your free VBI hub request"
            description="If the page convinced you, use this final form to request access, updates, and future community-style communication from the team."
            buttonLabel="Request Free Access"
            note="This routes directly to the VBI team so the conversation can start with real context instead of a cold generic signup."
            dark
          />
        </div>
      </section>
    </>
  );
}
