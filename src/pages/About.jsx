import { Link } from "react-router-dom";
import { PageHero, Reveal, Tilt, CountUp } from "../components/ui";
import doctors from "../data/doctors";
import departments from "../data/departments";

export default function About() {
  const values = [
    { t: "Explain first", d: "Every patient gets a plain-language answer to three questions: what is wrong, what happens next and what it costs." },
    { t: "Safety is a system", d: "Checklists, double identity checks and infection control are daily routine, not special occasions." },
    { t: "Dignity for everyone", d: "Privacy, respect and the same standard of care in a general ward and a private suite." },
    { t: "Open to questions", d: "Second opinions and tough questions are welcome. They make care better." },
  ];
  return (
    <>
      <PageHero eyebrow="About NOOR" title="Care you can understand" text="NOOR Health & Medical Center brings specialists, 24-hour emergency care and modern diagnostics together. Our promise is simple: you always know what is happening and why." crumbs={[{ label: "About" }]} />
      <section className="section">
        <div className="wrap stats">
          {[[doctors.length, "", "Specialist doctors"], [departments.length, "", "Departments"], [24, "/7", "Emergency, lab, pharmacy"], [10, "", "Operation theatres"]].map(([n, s, l], i) => (
            <Reveal key={l} delay={i * 60}><Tilt className="card stat"><strong><CountUp to={n} suffix={s} /></strong><span>{l}</span></Tilt></Reveal>
          ))}
        </div>
      </section>
      <section className="section section-tint">
        <div className="wrap">
          <h2 className="h2">How we work</h2>
          <div className="grid-4">
            {values.map((v, i) => (<Reveal key={v.t} delay={i * 60}><Tilt className="card problem"><h3>{v.t}</h3><p>{v.d}</p></Tilt></Reveal>))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="wrap center-cta">
          <h2 className="h2">Take a tour</h2>
          <p className="lede-dark">See every floor and what is on it.</p>
          <Link to="/facilities/hospital" className="btn btn-primary btn-lg">Open the floor guide</Link>
        </div>
      </section>
    </>
  );
}
