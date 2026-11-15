import { useState } from "react";
import { PageHero, Reveal, Tilt, Accordion } from "../components/ui";
import { otTypes, surgeryJourney, otSafety, anaesthesiaTypes } from "../data/facilities";

const checklist = [
  "Bring CNIC, reports, X-rays and all medicines you take",
  "Stop eating 6 hours and drinking 2 hours before surgery, unless told otherwise",
  "Ask your doctor which medicines to stop, especially blood thinners and diabetes tablets",
  "Remove jewellery, nail polish, contact lenses, dentures and make-up",
  "Bathe or shower and wear clean clothes",
  "Arrange a family member to stay with you",
  "Arrange help at home for the first week",
  "Tell the team about every allergy and previous reaction to anaesthesia",
];

export default function OperationTheatre() {
  const [done, setDone] = useState({});
  const n = Object.values(done).filter(Boolean).length;
  return (
    <>
      <PageHero eyebrow="Facilities" title="Operation theatres" text="Ten modern theatres with laminar-flow air, a 24-hour emergency theatre and a recovery room. Here is your surgery, step by step." crumbs={[{ label: "Facilities", to: "/facilities" }, { label: "Operation theatres" }]} />

      <section className="section">
        <div className="wrap">
          <h2 className="h2">Types of surgery we perform</h2>
          <div className="grid-4">
            {otTypes.map((o, i) => (<Reveal key={o.name} delay={(i % 4) * 50}><Tilt className="card problem"><h3>{o.name}</h3><p>{o.examples}</p></Tilt></Reveal>))}
          </div>
        </div>
      </section>

      <section className="section section-tint">
        <div className="wrap">
          <h2 className="h2">Your surgery journey</h2>
          <ol className="timeline">
            {surgeryJourney.map((s) => (<li key={s.t}><h3>{s.t}</h3><p>{s.d}</p></li>))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="wrap grid-2-cols">
          <Tilt className="card info-card tip">
            <h2>Pre-surgery checklist</h2>
            <p className="hint" aria-live="polite">{n} of {checklist.length} done</p>
            <ul className="todo">
              {checklist.map((c, i) => (
                <li key={c}><label><input type="checkbox" checked={!!done[i]} onChange={(e) => setDone({ ...done, [i]: e.target.checked })} /><span>{c}</span></label></li>
              ))}
            </ul>
          </Tilt>
          <div>
            <h2 className="h2">Types of anaesthesia</h2>
            <div className="stack-list">
              {anaesthesiaTypes.map((a) => (<div key={a.t} className="card row"><h3>{a.t}</h3><p>{a.d}</p></div>))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="wrap grid-2-cols">
          <div><h2 className="h2 light">How we keep surgery safe</h2><p className="lede light">Safety is built into every step, not left to chance.</p></div>
          <ul className="checks light">{otSafety.map((s) => (<li key={s}>{s}</li>))}</ul>
        </div>
      </section>

      <section className="section">
        <div className="wrap grid-2-cols">
          <div><h2 className="h2">Questions to ask your surgeon</h2><p className="lede-dark">You have the right to understand your operation.</p></div>
          <Accordion items={[
            { q: "Do I really need this surgery?", a: "Ask what happens if you wait or choose medicines or physiotherapy instead. A second opinion is welcome." },
            { q: "What are the risks and benefits?", a: "Ask for the most common and the most serious risks, and the chance the surgery will fix the problem." },
            { q: "How experienced is the team with this procedure?", a: "Ask how many times the surgeon performs it each year." },
            { q: "What will recovery look like?", a: "Ask about hospital stay, pain control, time off work, driving and when you can walk, climb stairs or exercise." },
            { q: "What is the total cost?", a: "Ask for a written estimate including surgeon, anaesthesia, room, implants, medicines and follow-up visits." },
          ]} />
        </div>
      </section>
    </>
  );
}
