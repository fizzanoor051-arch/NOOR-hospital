import { Link } from "react-router-dom";
import { PageHero, Reveal, Tilt } from "../components/ui";
import { facilityPages } from "../data/site";

export default function Facilities() {
  return (
    <>
      <PageHero eyebrow="Facilities" title="Everything under one roof" text="Each facility has a guide written for patients and families, so you know what to expect before you arrive." crumbs={[{ label: "Facilities" }]} />
      <section className="section">
        <div className="wrap grid-3">
          {facilityPages.map((f, i) => (
            <Reveal key={f.slug} delay={i * 60}>
              <Tilt className="card dept-card" as="article">
                <Link to={`/facilities/${f.slug}`} className="card-link">
                  <span className="dept-ico" aria-hidden="true">{f.icon}</span>
                  <h3>{f.title}</h3>
                  <p className="dept-tag">{f.tagline}</p>
                  <p className="dept-text">{f.text}</p>
                  <span className="card-foot"><span className="go">Open guide</span></span>
                </Link>
              </Tilt>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
