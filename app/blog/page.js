import Link from "next/link";
import { focusAreas } from "../lib/site-data";

export const metadata = {
  title: "Blog & Insights | Veterinary Business Institute",
  description: "Read articles and insights on veterinary business strategy, marketing, and leadership.",
};

export default function BlogPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow text-accent">Insights</span>
            <h1>
              Practice Growth <em>Blog.</em>
            </h1>
            <p className="hero-lead">
              Written guides and tactical articles that go deeper into the 
              methodologies discussed on our podcast and event panels.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid-two">
          {focusAreas.map((area, idx) => (
            <article className="card" key={idx}>
              <span className="card-label">Category: {area.title}</span>
              <h3 style={{ marginTop: "0.5rem" }}>The fundamental guide to {area.title.toLowerCase()}</h3>
              <p>{area.body}</p>
              <Link className="button button-secondary" href={`/blog/post-${idx + 1}`} style={{ marginTop: "1rem", display: "inline-block" }}>
                Read Article
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
