import { Link } from "react-router-dom";
import { HospitalScene, Helix } from "../components/Hospital3D";
import { Reveal, SectionHead, Tilt, CountUp } from "../components/ui";
import { DoctorCard } from "../components/Cards";
import AppointmentForm from "../components/AppointmentForm";
import departments from "../data/departments";
import doctors from "../data/doctors";
import { site, facilityPages } from "../data/site";
import { emergencyGuides, icuUnits } from "../data/facilities";

const icuBeds = icuUnits.reduce((a, u) => a + u.beds, 0);

const featuredDepts = ["cardiology", "neurology", "orthopedics", "pediatrics", "gynecology", "oncology", "nephrology", "ophthalmology"];
const featuredDocs = [2, 4, 28, 44, 47, 23];

const problems = [
  { t: "I don't know which doctor to see", d: "Search by symptom or condition and we show the right department.", to: "/departments", cta: "Find my department" },
  { t: "I don't understand my medicines", d: "Look up what each medicine is for, how to take it and when to be careful.", to: "/facilities/pharmacy", cta: "Open pharmacy guide" },
  { t: "I'm scared of my test or surgery", d: "See what happens step by step, how to prepare and what to ask.", to: "/facilities/operation-theatre", cta: "Read the surgery guide" },
  { t: "A family member is in ICU", d: "Understand the machines, visiting times and questions to ask.", to: "/facilities/icu", cta: "ICU family guide" },
  { t: "Someone needs blood today", d: "Check compatibility and how to arrange blood or donate.", to: "/facilities/blood-bank", cta: "Blood bank help" },
  { t: "Something is wrong right now", d: "First-aid steps for heart attack, stroke, burns, bleeding and more.", to: "/emergency", cta: "Emergency guide" },
];

export default function Home() {
  const depts = featuredDepts.map((s) => departments.find((d) => d.slug === s));
  const docs = featuredDocs.map((i) => doctors.find((d) => d.id === i)).filter(Boolean);
  const count = (slug) => doctors.filter((d) => d.departmentSlug === slug).length;

  return (
    <>
      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-glow" aria-hidden="true" />
        <div className="wrap hero-in">
          <div className="hero-copy">
            <p className="hero-badge"><span className="pulse-dot" aria-hidden="true" /> Open now · Emergency 24 hours</p>
            <h1>A hospital that explains, not just treats.</h1>
            <p className="hero-lede">Find the right doctor, understand your medicines and tests, and get help fast. From the pharmacy to the ICU, every department is open to you.</p>
            <div className="hero-cta">
              <Link to="/appointment" className="btn btn-primary btn-lg">Book an appointment</Link>
              <Link to="/doctors" className="btn btn-glass btn-lg">Find a doctor</Link>
            </div>
            <ul className="hero-points">
              <li><strong><CountUp to={doctors.length} /></strong> specialist doctors</li>
              <li><strong><CountUp to={departments.length} /></strong> departments</li>
              <li><strong><CountUp to={icuBeds} /></strong> ICU beds</li>
            </ul>
          </div>
          <HospitalScene />
        </div>
        <a className="hero-emg" href={`tel:${site.emergency}`}>
          <span className="pulse-dot" aria-hidden="true" />
          <span>Medical emergency? Call <strong>{site.emergency}</strong></span>
        </a>
      </section>

      {/* REAL PROBLEMS */}
      <section className="section">
        <div className="wrap">
          <SectionHead eyebrow="Start here" title="What do you need help with today?" text="Pick the situation that sounds like yours. Each page is written in plain language, with steps you can follow." />
          <div className="grid-3">
            {problems.map((p, i) => (
              <Reveal key={p.t} delay={i * 60}>
                <Tilt className="card problem">
                  <h3>{p.t}</h3>
                  <p>{p.d}</p>
                  <Link to={p.to} className="textlink">{p.cta}</Link>
                </Tilt>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DEPARTMENTS */}
      <section className="section section-tint">
        <div className="wrap">
          <SectionHead eyebrow="Departments" title="Every specialty under one roof" text={`${departments.length} departments, from heart care to physiotherapy. Each page lists conditions treated, procedures and when to visit.`} />
          <div className="grid-4">
            {depts.map((d, i) => (
              <Reveal key={d.slug} delay={i * 50}>
                <Tilt className="card mini-dept" as="article">
                  <Link to={`/departments/${d.slug}`} className="card-link" aria-label={d.name}>
                    <span className="dept-ico" aria-hidden="true">{d.icon}</span>
                    <h3>{d.name}</h3>
                    <p>{d.tagline}</p>
                    <span className="card-foot"><span>{count(d.slug)} doctors</span><span className="go">Open</span></span>
                  </Link>
                </Tilt>
              </Reveal>
            ))}
          </div>
          <div className="center-cta"><Link to="/departments" className="btn btn-primary btn-lg">See all {departments.length} departments</Link></div>
        </div>
      </section>

      {/* FACILITIES */}
      <section className="section section-dark">
        <div className="helix-slot" aria-hidden="true"><Helix /></div>
        <div className="wrap">
          <SectionHead light eyebrow="Facilities" title="Everything you need under one roof" text="More than a list of services. Every facility has its own guide so you know what to expect." />
          <div className="grid-3">
            {facilityPages.map((f, i) => (
              <Reveal key={f.slug} delay={i * 60}>
                <Tilt className="card glass-card" as="article">
                  <Link to={`/facilities/${f.slug}`} className="card-link">
                    <span className="dept-ico" aria-hidden="true">{f.icon}</span>
                    <h3>{f.title}</h3>
                    <p className="dept-tag">{f.tagline}</p>
                    <p>{f.text}</p>
                    <span className="card-foot"><span className="go">Open guide</span></span>
                  </Link>
                </Tilt>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DOCTORS */}
      <section className="section">
        <div className="wrap">
          <SectionHead eyebrow="Our doctors" title="Meet some of our specialists" text="Consultants, professors and senior doctors with years of hands-on experience." />
          <div className="grid-3">
            {docs.map((d, i) => (<Reveal key={d.id} delay={i * 50}><DoctorCard doc={d} /></Reveal>))}
          </div>
          <div className="center-cta"><Link to="/doctors" className="btn btn-primary btn-lg">Browse all {doctors.length} doctors</Link></div>
        </div>
      </section>

      {/* EMERGENCY */}
      <section className="section section-emg">
        <div className="wrap emg-split">
          <div>
            <SectionHead light eyebrow="Emergency" title="Know what to do before it happens" text="The first minutes matter most. Learn the right steps for the most common emergencies." />
            <div className="emg-actions">
              <a className="btn btn-emg btn-lg" href={`tel:${site.emergency}`}>Call {site.emergency}</a>
              <a className="btn btn-glass btn-lg" href={`tel:${site.ambulanceTel}`}>Hospital ambulance</a>
              <a className="btn btn-glass btn-lg" href={`mailto:${site.emergencyEmail}`}>Email emergency desk</a>
            </div>
          </div>
          <ul className="emg-list">
            {emergencyGuides.slice(0, 6).map((g) => (
              <li key={g.title}><Link to={`/emergency#${g.title.split(" ")[0].toLowerCase().replace(/[^a-z]/g, "")}`}><span aria-hidden="true">{g.icon}</span>{g.title}</Link></li>
            ))}
          </ul>
        </div>
      </section>

      {/* APPOINTMENT */}
      <section className="section section-tint" id="appointment">
        <div className="wrap appt-split">
          <div>
            <SectionHead eyebrow="Appointments" title="Book in under a minute" text="Choose a doctor, pick a day they are available and send your request. No account needed." />
            <ul className="ticks">
              <li>Only the days and slots each doctor actually works</li>
              <li>Send by WhatsApp or email for quick confirmation</li>
              <li>Bring CNIC and previous reports</li>
            </ul>
          </div>
          <Reveal className="card form-card"><AppointmentForm compact /></Reveal>
        </div>
      </section>
    </>
  );
}
