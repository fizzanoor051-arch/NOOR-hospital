import { Link, useParams } from "react-router-dom";
import { PageHero, Avatar, Stars, Reveal, Tilt } from "../components/ui";
import { DoctorCard } from "../components/Cards";
import { getDoctor, doctorsByDepartment } from "../data/doctors";
import { site } from "../data/site";
import NotFound from "./NotFound";

export default function DoctorDetail() {
  const { id } = useParams();
  const doc = getDoctor(id);
  if (!doc) return <NotFound />;
  const others = doctorsByDepartment(doc.departmentSlug).filter((d) => d.id !== doc.id).slice(0, 3);

  return (
    <>
      <PageHero eyebrow={doc.department} title={doc.name} text={doc.designation} crumbs={[{ label: "Doctors", to: "/doctors" }, { label: doc.name }]}>
        <div className="doc-hero">
          <Avatar name={doc.name} gender={doc.gender} size={104} />
          <div className="doc-hero-facts">
            <span><Stars value={doc.rating} /></span>
            <span>{doc.experience} years experience</span>
            <span>{doc.languages}</span>
          </div>
        </div>
        <div className="hero-actions">
          <Link to={`/appointment?doctor=${doc.id}`} className="btn btn-primary btn-lg">Book appointment</Link>
          <a className="btn btn-glass btn-lg" href={`tel:${site.helplineTel}`}>Call helpline</a>
        </div>
      </PageHero>

      <section className="section">
        <div className="wrap grid-2-cols">
          <Reveal><Tilt className="card info-card"><h2>About</h2><p>{doc.about}</p>
            <h3 className="h3">Qualifications</h3><p>{doc.qualification}</p></Tilt></Reveal>
          <Reveal delay={80}><Tilt className="card info-card"><h2>Treats and performs</h2>
            <ul className="checks">{doc.focus.map((f) => (<li key={f}>{f}</li>))}</ul>
            <p className="hint"><Link className="textlink" to={`/departments/${doc.departmentSlug}`}>See the {doc.department} department</Link></p></Tilt></Reveal>
          <Reveal><Tilt className="card info-card"><h2>Clinic schedule</h2>
            <div className="days">{["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((x) => (<span key={x} className={doc.days.includes(x) ? "on" : ""}>{x}</span>))}</div>
            <p className="hint">Time slots</p>
            <ul className="pills">{doc.slots.map((s) => (<li key={s}>{s}</li>))}</ul></Tilt></Reveal>
          <Reveal delay={80}><Tilt className="card info-card"><h2>Consultation</h2>
            <p className="big-fee">{doc.fee ? `PKR ${doc.fee.toLocaleString()}` : "By referral"}</p>
            <p className="hint">Follow-up within 7 days is at half fee. Bring all previous reports.</p>
            <Link to={`/appointment?doctor=${doc.id}`} className="btn btn-primary">Choose a time</Link></Tilt></Reveal>
        </div>
      </section>

      {others.length > 0 && (
        <section className="section section-tint">
          <div className="wrap">
            <h2 className="h2">More in {doc.department}</h2>
            <div className="grid-3">{others.map((d) => (<DoctorCard key={d.id} doc={d} />))}</div>
          </div>
        </section>
      )}
    </>
  );
}
