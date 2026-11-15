import { useState } from "react";
import { PageHero, Reveal, Tilt, Accordion } from "../components/ui";
import { bloodGroups, bloodComponents, donorRules, donationSteps, bloodFaq } from "../data/facilities";
import { site } from "../data/site";

export default function BloodBank() {
  const [g, setG] = useState("O+");
  const info = bloodGroups.find((x) => x.group === g);
  return (
    <>
      <PageHero tone="red" eyebrow="Facilities · open 24 hours" title="Blood bank" text="Every unit is screened, cross-matched and stored under controlled temperature. Check compatibility, learn who can donate and arrange blood for a patient." crumbs={[{ label: "Facilities", to: "/facilities" }, { label: "Blood bank" }]}>
        <div className="hero-actions">
          <a className="btn btn-white btn-lg" href={`tel:${site.helplineTel}`}>Request blood now</a>
          <a className="btn btn-glass btn-lg" target="_blank" rel="noreferrer" href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hello, I want to register as a blood donor.")}`}>Register as donor</a>
        </div>
      </PageHero>

      <section className="section">
        <div className="wrap">
          <h2 className="h2">Blood group compatibility</h2>
          <p className="lede-dark">Choose a blood group to see who it can give to and receive from (red blood cells).</p>
          <div className="bg-picker" role="group" aria-label="Blood group">
            {bloodGroups.map((b) => (<button type="button" key={b.group} className={g === b.group ? "on" : ""} aria-pressed={g === b.group} onClick={() => setG(b.group)}>{b.group}</button>))}
          </div>
          <div className="grid-2-cols compat">
            <Tilt className="card info-card"><h3>{g} can give to</h3><ul className="pills">{info.canGiveTo.map((x) => (<li key={x}>{x}</li>))}</ul></Tilt>
            <Tilt className="card info-card"><h3>{g} can receive from</h3><ul className="pills">{info.canReceiveFrom.map((x) => (<li key={x}>{x}</li>))}</ul></Tilt>
          </div>
          {info.note && <p className="hint">{info.note}</p>}
        </div>
      </section>

      <section className="section section-tint">
        <div className="wrap">
          <h2 className="h2">Blood and its components</h2>
          <p className="lede-dark">One donation can help up to three patients, because blood is separated into parts.</p>
          <div className="grid-3">
            {bloodComponents.map((c, i) => (<Reveal key={c.name} delay={i * 50}><Tilt className="card problem"><h3>{c.name}</h3><p><strong>Used for:</strong> {c.use}</p><p className="hint">Shelf life: {c.life}</p></Tilt></Reveal>))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2 className="h2">Can I donate?</h2>
          <div className="grid-3">
            <Tilt className="card info-card tip"><h3>You can donate if</h3><ul className="checks">{donorRules.can.map((x) => (<li key={x}>{x}</li>))}</ul></Tilt>
            <Tilt className="card info-card"><h3>Wait if</h3><ul className="checks">{donorRules.wait.map((x) => (<li key={x}>{x}</li>))}</ul></Tilt>
            <Tilt className="card info-card warn"><h3>You cannot donate if</h3><ul className="checks alert">{donorRules.cannot.map((x) => (<li key={x}>{x}</li>))}</ul></Tilt>
          </div>
        </div>
      </section>

      <section className="section section-tint">
        <div className="wrap">
          <h2 className="h2">How donation works</h2>
          <ol className="timeline">
            {donationSteps.map((s) => (<li key={s.t}><h3>{s.t}</h3><p>{s.d}</p></li>))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="wrap grid-2-cols">
          <div>
            <h2 className="h2">Arranging blood for a patient</h2>
            <ul className="checks">
              <li>Bring the doctor's blood request form and the patient's ID</li>
              <li>Tell us the blood group, the component and the number of units</li>
              <li>In an emergency, blood is released immediately and replaced later</li>
              <li>Bring a family donor if you can; it keeps the bank stocked for others</li>
            </ul>
            <a className="btn btn-primary" href={`mailto:${site.email}?subject=Blood%20request`}>Email blood request</a>
          </div>
          <Accordion items={bloodFaq} />
        </div>
      </section>
    </>
  );
}
