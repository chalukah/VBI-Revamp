import Link from "next/link";
import { withBasePath } from "../lib/base-path";

export const metadata = {
  title: "Our Team | Veterinary Business Institute",
  description: "Meet the leadership and coaching team behind the Veterinary Business Institute and Ekwa Marketing.",
};

const teamMembers = [
  {
    name: "Naren Arulrajah",
    title: "Founder & CEO, Ekwa Marketing",
    bio: "Naren drives the marketing vision behind VBI, using data-driven local SEO and strategic visibility audits to help veterinary practices dominate their zip codes."
  },
  {
    name: "Dr. Sarah Jenkins",
    title: "Lead CSM Coach",
    bio: "With 15 years in multi-doctor practice ownership, Dr. Jenkins leads our one-on-one coaching strategies focusing on retention and operational flow."
  },
  {
    name: "Marcus Thorne",
    title: "Director of Marketing Insights",
    bio: "Marcus leads the Ekwa audit review team, breaking down complex ranking factors into actionable strategy plans for VBI members."
  }
];

export default function TeamPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow text-accent">Leadership</span>
            <h1>
              Meet the <em>Team.</em>
            </h1>
            <p className="hero-lead">
              The Veterinary Business Institute is built on a partnership between 
              experienced clinical operators and the marketing leaders at Ekwa. 
              Meet the team guiding our podcasts, content, and strategy.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid-three">
          {teamMembers.map((member) => (
             <article className="card" key={member.name} style={{ textAlign: "center", padding: "3rem 2rem" }}>
               {/* Placeholder for dynamic headshots */}
               <div style={{ width: "120px", height: "120px", backgroundColor: "var(--background-muted)", borderRadius: "50%", margin: "0 auto 1.5rem" }}>
                 <img 
                   src={withBasePath("/assets/about-speaker.jpg")} 
                   alt={member.name} 
                   style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "50%"}} 
                 />
               </div>
               <h3>{member.name}</h3>
               <span className="eyebrow text-accent" style={{ display: "block", marginBottom: "1rem" }}>{member.title}</span>
               <p style={{ fontSize: "0.95rem" }}>{member.bio}</p>
             </article>
          ))}
        </div>
      </section>
      
      <section className="section section-muted">
        <div className="container" style={{ textAlign: "center", maxWidth: "700px" }}>
          <h2>Looking for a Speaker?</h2>
          <p style={{ marginTop: "1rem", marginBottom: "2rem" }}>
            Our leadership team frequently presents at veterinary association events, 
            summits, and online panels on topics of culture, marketing, and operations.
          </p>
          <Link className="button button-primary" href="/guest-speaker">
             Invite a Speaker
          </Link>
        </div>
      </section>
    </>
  );
}
