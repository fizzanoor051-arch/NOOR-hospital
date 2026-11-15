import { Link } from "react-router-dom";
import { PageHero, Reveal, Tilt, Accordion } from "../components/ui";
import { emergencyGuides, triageLevels } from "../data/facilities";
import { site } from "../data/site";

export const guideId = (t) => t.split(" ")[0].toLowerCase().replace(/[^a-z]/g, "");

export default function Emergency() {
  return (
    <>
      <PageHero tone="red" eyebrow="Emergency & trauma · open 24 hours" title="In an emergency, act fast" text="Call first, then follow the steps below while help is on the way." crumbs={[{ label: "Emergency" }]}>
        <div className="hero-actions">
          <a className="btn btn-white btn-lg" href={`tel:${site.emergency}`}>Call {site.emergency}</a>
          <a className="btn btn-glass btn-lg" href={`tel:${site.ambulanceTel}`}>Hospital ambulance</a>
          <a className="btn btn-glass btn-lg" href={`mailto:${site.emergencyEmail}?subject=Emergency%20enquiry`}>Email emergency desk</a>
        </div>
      </PageHero>

      <section className="section">
        <div className="wrap">
          <div className="grid-4 tri">
            <Reveal><div className="card step-card"><b>1</b><h3>Call</h3><p>Dial {site.emergency} or our ambulance line. Say where you are and what happened.</p></div></Reveal>
            <Reveal delay={60}><div className="card step-card"><b>2</b><h3>Stay safe</h3><p>Make the area safe. Do not move an injured person unless there is fire or danger.</p></div></Reveal>
            <Reveal delay={120}><div className="card step-card"><b>3</b><h3>Give first aid</h3><p>Follow the steps for the condition below until the team arrives.</p></div></Reveal>
            <Reveal delay={180}><div className="card step-card"><b>4</b><h3>Come to Emergency</h3><p>Bring medicines, reports and a CNIC if you can. Treatment never waits for paperwork.</p></div></Reveal>
          </div>
        </div>
      </section>

      <section className="section section-tint">
        <div className="wrap">
          <h2 className="h2">First-aid guide</h2>
          <div className="grid-2-cols">
            {emergencyGuides.map((g) => (
              <Reveal key={g.title} id={guideId(g.title)}>
                <Tilt className="card guide-card">
                  <h3><span aria-hidden="true">{g.icon}</span> {g.title}</h3>
                  <p className="signs"><strong>Signs:</strong> {g.signs}</p>
                  <h4>Do this</h4>
                  <ul className="checks">{g.doThis.map((x) => (<li key={x}>{x}</li>))}</ul>
                  <h4 className="bad">Do not</h4>
                  <ul className="checks cross">{g.dont.map((x) => (<li key={x}>{x}</li>))}</ul>
                </Tilt>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2 className="h2">How we decide who is seen first</h2>
          <p className="lede-dark">Emergency departments do not work first-come, first-served. A triage nurse checks every patient within 5 minutes and sees the sickest first. A longer wait often means your condition is stable, which is good news.</p>
          <div className="triage">
            {triageLevels.map((t) => (
              <div key={t.level} className="triage-row" style={{ "--c": t.color }}>
                <span className="dot" /><strong>{t.level}</strong><span>{t.wait}</span><span className="ex">{t.examples}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-tint">
        <div className="wrap grid-2-cols">
          <div>
            <h2 className="h2">Emergency services</h2>
            <ul className="checks">
              <li>Trauma bay and resuscitation room</li><li>24-hour CT scan, X-ray and laboratory</li>
              <li>Emergency operation theatre</li><li>Ambulance with oxygen and defibrillator</li>
              <li>Poison and snake-bite treatment</li><li>Round-the-clock pharmacy and blood bank</li>
            </ul>
            <p className="related"><Link to="/facilities/blood-bank" className="textlink">Blood bank</Link> · <Link to="/facilities/pharmacy" className="textlink">24/7 pharmacy</Link> · <Link to="/facilities/icu" className="textlink">ICU guide</Link></p>
          </div>
          <Accordion items={[
            { q: "Will you treat me without money or papers?", a: "Yes. Life-saving treatment starts immediately. Billing and documents are handled afterwards." },
            { q: "Can a relative stay with me?", a: "One attendant may stay with you. Others wait in the lounge until you are stable." },
            { q: "Should I drive a heart attack patient myself?", a: "No. An ambulance starts treatment on the way and alerts the cardiac team so the cath lab is ready on arrival." },
            { q: "Where is the entrance?", a: "Emergency has a separate ground-floor entrance on the main road side with a ramp and ambulance bay." },
          ]} />
        </div>
      </section>
    </>
  );
}
