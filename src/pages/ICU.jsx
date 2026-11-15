import { PageHero, Reveal, Tilt, Accordion } from "../components/ui";
import { icuUnits, icuMachines, icuVisiting } from "../data/facilities";
import { site } from "../data/site";

export default function ICU() {
  const total = icuUnits.reduce((a, u) => a + u.beds, 0);
  return (
    <>
      <PageHero tone="navy" eyebrow="Facilities · open 24 hours" title="ICU & critical care" text={`${total} intensive care beds in ${icuUnits.length} specialised units. If someone you love is here, this page explains what you will see and how you can help.`} crumbs={[{ label: "Facilities", to: "/facilities" }, { label: "ICU" }]}>
        <div className="hero-actions">
          <a className="btn btn-primary btn-lg" href={`tel:${site.helplineTel}`}>Call ICU desk</a>
          <a className="btn btn-glass btn-lg" href={`tel:${site.emergency}`}>Emergency {site.emergency}</a>
        </div>
      </PageHero>

      <section className="section">
        <div className="wrap">
          <h2 className="h2">Our intensive care units</h2>
          <div className="grid-4">
            {icuUnits.map((u, i) => (
              <Reveal key={u.name} delay={i * 40}>
                <Tilt className="card icu-unit"><b>{u.beds}</b><span>beds</span><h3>{u.name}</h3><p>{u.text}</p></Tilt>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-tint">
        <div className="wrap">
          <h2 className="h2">The machines around the bed</h2>
          <p className="lede-dark">The ICU can look frightening. Here is what each device does.</p>
          <div className="grid-3">
            {icuMachines.map((m, i) => (
              <Reveal key={m.name} delay={i * 50}>
                <Tilt className="card problem"><h3>{m.name}</h3><p>{m.what}</p><p className="hint">{m.worry}</p></Tilt>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap grid-2-cols">
          <Tilt className="card info-card"><h2>Visiting</h2>
            <ul className="pills">{icuVisiting.hours.map((h) => (<li key={h}>{h}</li>))}</ul>
            <ul className="checks">{icuVisiting.rules.map((r) => (<li key={r}>{r}</li>))}</ul></Tilt>
          <Tilt className="card info-card tip"><h2>For families</h2>
            <ul className="checks">{icuVisiting.families.map((r) => (<li key={r}>{r}</li>))}</ul>
            <h3 className="h3">Questions to ask the doctor</h3>
            <ul className="checks">
              <li>What is the main problem right now?</li><li>Is the patient improving, stable or worse?</li>
              <li>What are today's goals and what are we waiting for?</li><li>What can the family do to help?</li>
            </ul></Tilt>
        </div>
      </section>

      <section className="section section-tint">
        <div className="wrap grid-2-cols">
          <div><h2 className="h2">Common worries</h2><p className="lede-dark">Honest answers to what families ask most.</p></div>
          <Accordion items={[
            { q: "Is my relative in pain?", a: "Pain and anxiety are treated continuously with medicines. Nurses check comfort every hour and use a pain score even for patients who cannot speak." },
            { q: "Why is the patient asleep?", a: "Sedation lets the body rest and tolerate the breathing tube. Doctors reduce it daily and wake the patient when it is safe." },
            { q: "Can the patient hear me?", a: "Many patients can. Speak gently, say who you are and tell them where they are. Familiar voices help." },
            { q: "How long will the stay be?", a: "It depends on the illness. Doctors review daily and share an expected timeline once the picture is clear." },
            { q: "What happens after ICU?", a: "Patients move to a step-down or high-dependency ward, then home with a rehabilitation plan." },
          ]} />
        </div>
      </section>
    </>
  );
}
