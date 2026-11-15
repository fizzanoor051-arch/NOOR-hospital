import { Link, useParams } from "react-router-dom";
import { PageHero, Reveal, Tilt } from "../components/ui";
import { DoctorCard } from "../components/Cards";
import { getDepartment } from "../data/departments";
import departments from "../data/departments";
import { doctorsByDepartment } from "../data/doctors";
import { site } from "../data/site";
import NotFound from "./NotFound";

const related = {
  pathology: "/facilities/laboratory", radiology: "/facilities/laboratory", emergency: "/emergency",
  icu: "/facilities/icu", anaesthesia: "/facilities/operation-theatre",
};

export default function DepartmentDetail() {
  const { slug } = useParams();
  const dept = getDepartment(slug);
  if (!dept) return <NotFound />;
  const docs = doctorsByDepartment(slug);
  const idx = departments.findIndex((d) => d.slug === slug);
  const prev = departments[(idx - 1 + departments.length) % departments.length];
  const next = departments[(idx + 1) % departments.length];
  const urgent = ["emergency", "icu"].includes(dept.group) || dept.slug === "emergency";

  return (
    <>
      <PageHero eyebrow={dept.tagline} title={<><span className="hero-ico" aria-hidden="true">{dept.icon}</span> {dept.name}</>} text={dept.about} crumbs={[{ label: "Departments", to: "/departments" }, { label: dept.name }]}>
        <div className="hero-actions">
          <Link to={`/appointment?dept=${dept.slug}`} className="btn btn-primary btn-lg">Book in {dept.name}</Link>
          <a className="btn btn-glass btn-lg" href={`tel:${urgent ? site.emergency : site.helplineTel}`}>{urgent ? `Emergency ${site.emergency}` : "Call helpline"}</a>
        </div>
        <p className="hours-pill">🕑 {dept.hours}</p>
      </PageHero>

      <section className="section">
        <div className="wrap grid-2-cols">
          <Reveal>
            <Tilt className="card info-card"><h2>Conditions we treat</h2>
              <ul className="pills">{dept.treats.map((t) => (<li key={t}>{t}</li>))}</ul>
            </Tilt>
          </Reveal>
          <Reveal delay={80}>
            <Tilt className="card info-card"><h2>Tests and procedures</h2>
              <ul className="checks">{dept.procedures.map((t) => (<li key={t}>{t}</li>))}</ul>
            </Tilt>
          </Reveal>
          <Reveal>
            <Tilt className="card info-card warn"><h2>When to see us</h2>
              <ul className="checks alert">{dept.whenToVisit.map((t) => (<li key={t}>{t}</li>))}</ul>
            </Tilt>
          </Reveal>
          <Reveal delay={80}>
            <Tilt className="card info-card tip"><h2>What you can do</h2>
              <ul className="checks">{dept.tips.map((t) => (<li key={t}>{t}</li>))}</ul>
            </Tilt>
          </Reveal>
        </div>
        {related[slug] && <div className="wrap"><p className="related">Related guide: <Link to={related[slug]} className="textlink">Open the full guide</Link></p></div>}
      </section>

      <section className="section section-tint">
        <div className="wrap">
          <h2 className="h2">Doctors in {dept.name}</h2>
          <div className="grid-3">{docs.map((d) => (<DoctorCard key={d.id} doc={d} />))}</div>
        </div>
      </section>

      <section className="section pager-sec">
        <div className="wrap pager">
          <Link to={`/departments/${prev.slug}`} className="card pager-card"><small>Previous</small><strong>{prev.name}</strong></Link>
          <Link to="/departments" className="btn btn-ghost">All departments</Link>
          <Link to={`/departments/${next.slug}`} className="card pager-card right"><small>Next</small><strong>{next.name}</strong></Link>
        </div>
      </section>
    </>
  );
}
