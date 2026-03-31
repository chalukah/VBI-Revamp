import Link from "next/link";
import { contactDetails, auditLink } from "../lib/site-data";
import CommunityJoinForm from "../community/CommunityJoinForm";

export const metadata = {
  title: "Book a Consultation | Veterinary Business Institute",
  description: "Schedule a free strategic consultation and visibility audit for your veterinary practice.",
};

export default function ConsultationPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow text-accent">Strategic Consultation</span>
            <h1>
              Let's talk about <em>your practice.</em>
            </h1>
            <p className="hero-lead">
              Our consultation structure is built around a comprehensive 4 to 6-hour 
              review of your online visibility, local competition, and growth gaps. 
              Fill out the request, and we'll map out your next move.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split-grid">
          <article className="card">
            <span className="eyebrow text-accent">The Audit</span>
            <h2>What to expect from a VBI Consultation</h2>
            <p>
              Unlike generic agency pitches, our first call is meant to surface 
              actionable math. Before we talk, the Ekwa marketing team will 
              evaluate the six specific ranking factors influencing your 
              market positioning so we can show you exact comparison data.
            </p>
            <div style={{ marginTop: "2rem" }}>
              <h4>Who this is for:</h4>
              <ul className="check-list" style={{ marginTop: "1rem" }}>
                <li>Practice Owners & Partners</li>
                <li>Hospitals scaling their operations</li>
                <li>Teams facing tight local competition</li>
              </ul>
            </div>
          </article>

          <div className="form-wrapper">
             <CommunityJoinForm
               email={contactDetails[2].label}
               title="Request Consultation Details"
               description="Use this form to fast-track your inquiry into the team, or book directly via the calendar below."
               buttonLabel="Send Consultation Request"
               note="Form submissions route directly to the VBI lead team."
             />
             <div style={{ marginTop: "1.5rem", textAlign: "center" }}>
               <span style={{ display: "block", marginBottom: "1rem" }}>Or pick a direct time slot:</span>
               <a className="button button-primary" href={auditLink} target="_blank" rel="noreferrer">
                 Book Now via Ekwa
               </a>
             </div>
          </div>
        </div>
      </section>
    </>
  );
}
