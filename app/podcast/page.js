import Link from "next/link";
import { withBasePath } from "../lib/base-path";
import {
  episodes,
  hosts,
  listeningPlatforms,
  podcastHubLink,
} from "../lib/site-data";

const listeningThemes = [
  "Staffing and relief strategy",
  "Practice continuity and resilience",
  "Leadership and retention",
  "Technology and client experience",
];

const episodeGallery = [
  withBasePath("/assets/episode-100.jpg"),
  withBasePath("/assets/episode-101.jpg"),
  withBasePath("/assets/episode-102.jpg"),
  withBasePath("/assets/episode-103.jpg"),
];

export const metadata = {
  title: "Podcast | Veterinary Business Institute",
  description:
    "Explore the Veterinary Business Podcast with featured episodes, host profiles, and practical veterinary business topics.",
};

export default function PodcastPage() {
  const featuredEpisode = episodes[0];

  return (
    <>
      <section className="page-hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow text-accent">Veterinary Business Podcast</span>
            <p className="hero-kicker">Leadership, staffing, marketing, and growth conversations for veterinary teams.</p>
            <h1>
              Conversations that help practices grow with more <em>clarity.</em>
            </h1>
            <p className="hero-lead">
              The Veterinary Business Podcast brings together practical conversations around relief
              staffing, client experience, team leadership, technology, and practice growth so
              listeners can move from broad ideas to practical decisions.
            </p>
            <div className="platform-row">
              {listeningPlatforms.map((item) => (
                <a href={item.href} key={item.label} target="_blank" rel="noreferrer">
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div className="image-frame">
            <img src={withBasePath("/assets/episode-103.jpg")} alt="Veterinary Business Podcast episode cover art" />
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <article className="card card-dark feature-panel">
            <div className="panel-head">
              <span className="eyebrow text-accent">Featured Episode</span>
              <span className="meta-text">{featuredEpisode.date}</span>
            </div>
            <div className="media-panel">
              <img src={featuredEpisode.image} alt={featuredEpisode.title} />
              <div>
                <h2>{featuredEpisode.title}</h2>
                <p>{featuredEpisode.summary}</p>
                <ul className="check-list">
                  <li>How relief doctors fit into a more strategic staffing model.</li>
                  <li>What continuity looks like when practices stop reacting week to week.</li>
                  <li>Why stronger onboarding and feedback loops improve outcomes.</li>
                </ul>
                <div className="button-row">
                  <a className="button button-primary" href={featuredEpisode.href} target="_blank" rel="noreferrer">
                    Listen to Episode 103
                  </a>
                  <a className="button button-secondary button-dark" href={podcastHubLink} target="_blank" rel="noreferrer">
                    Open Live Archive
                  </a>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow text-accent">Hosts</span>
            <h2>Trusted voices with a direct connection to veterinary growth and leadership.</h2>
          </div>
          <div className="profile-grid">
            {hosts.map((item) => (
              <article className="card profile-card" key={item.name}>
                <img src={item.image} alt={item.name} />
                <h3>{item.name}</h3>
                <p className="muted-text">{item.role}</p>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: "var(--background-muted)" }}>
        <div className="container" style={{ textAlign: "center", maxWidth: "800px" }}>
          <span className="eyebrow text-accent">Deep Search</span>
          <h2>AI-Powered Transcript Search</h2>
          <p className="muted-text" style={{ marginTop: "1rem" }}>
            Looking for a specific conversation about "associate compensation" or "SOPs"? 
            Search across our entire podcast transcript library.
          </p>
          <div style={{ display: "flex", gap: "1rem", marginTop: "2rem", flexWrap: "wrap", justifyContent: "center" }}>
            <input 
              type="text" 
              placeholder="e.g. 'client retention strategy'" 
              style={{ flexGrow: 1, padding: "1rem", borderRadius: "8px", border: "1px solid var(--border)", minWidth: "300px", maxWidth: "500px" }}
              disabled
            />
            <Link className="button button-primary" href="/contact">
              Ask About Transcript Search
            </Link>
          </div>
          <p style={{ fontSize: "0.8rem", color: "var(--ink-400)", marginTop: "1rem" }}>(Requires Backend Database Integration)</p>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow text-accent">Recent Listening</span>
            <h2>Recent episodes deserve summaries, dates, and visual hierarchy.</h2>
          </div>
          <div className="grid-two">
            {episodes.map((item) => (
              <article className="card archive-card" key={item.number}>
                <img src={item.image} alt={item.title} />
                <span className="card-label">Episode {item.number} / {item.date}</span>
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
                <a href={item.href} target="_blank" rel="noreferrer">
                  Open Episode
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow text-accent">Episode Visuals</span>
            <h2>Episode artwork gives the archive a consistent editorial identity.</h2>
          </div>
          <div className="grid-three">
            {episodeGallery.map((image, index) => (
              <article className="card archive-card" key={image}>
                <img src={image} alt={`Episode artwork ${index + 100}`} />
                <h3>Episode artwork from the recent archive</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split-grid">
          <article className="card">
            <span className="eyebrow text-accent">Topic Coverage</span>
            <h2>The archive now tells visitors what they can learn before they click.</h2>
            <ul className="check-list">
              {listeningThemes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <div className="page-cta">
            <div>
              <span className="eyebrow text-accent">Keep Exploring</span>
              <h2>Pair podcast listening with the replay library and marketing guidance.</h2>
              <p>
                VBI works best when podcast listening connects to replay content, panel discussions,
                and strategy guidance that help practices apply what they learn.
              </p>
            </div>
            <div className="cta-actions">
              <a className="button button-primary" href={podcastHubLink} target="_blank" rel="noreferrer">
                View Live Podcast Site
              </a>
              <Link className="button button-secondary" href="/webinars">
                Go to Webinars
              </Link>
              <Link className="button button-secondary" href="/about">
                Meet the Team
              </Link>
              <Link className="button button-secondary" href="/marketing">
                Explore Marketing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
