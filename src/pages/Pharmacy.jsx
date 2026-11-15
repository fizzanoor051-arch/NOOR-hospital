import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { PageHero, SearchBox, Chips, Reveal, Tilt, Accordion, Empty } from "../components/ui";
import { medicines, medicineCategories, pharmacyServices, pharmacyGuides } from "../data/pharmacy";
import { site } from "../data/site";

function Med({ m }) {
  const [open, setOpen] = useState(false);
  return (
    <Tilt className={`card med ${open ? "open" : ""}`} as="article">
      <div className="med-head">
        <div>
          <h3>{m.name}</h3>
          <p className="generic">{m.generic}</p>
        </div>
        <span className={`rx rx-${m.rx.split(" ")[0].toLowerCase()}`}>{m.rx === "OTC" ? "No prescription" : m.rx === "Rx" ? "Prescription only" : m.rx}</span>
      </div>
      <p><strong>Used for:</strong> {m.usedFor}</p>
      <p className="med-form">{m.category} · {m.form}</p>
      <button type="button" className="textlink-btn" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? "Hide details" : "How to take it and cautions"}</button>
      {open && (
        <div className="med-more">
          <p><strong>How to take:</strong> {m.howToTake}</p>
          <p className="med-warn"><strong>Be careful:</strong> {m.caution}</p>
          <p className="hint">Your doctor sets the dose and duration. Ask the pharmacist if unsure.</p>
        </div>
      )}
    </Tilt>
  );
}

export default function Pharmacy() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("All");
  const list = useMemo(() => {
    const s = q.trim().toLowerCase();
    return medicines.filter((m) => (cat === "All" || m.category === cat) && (!s || [m.name, m.generic, m.usedFor, m.category].join(" ").toLowerCase().includes(s)));
  }, [q, cat]);

  return (
    <>
      <PageHero eyebrow="Facilities · open 24 hours" title="Pharmacy that explains your medicines" text="Search by medicine name or by the problem, such as “fever”, “BP” or “acidity”. See what each one is for and how to use it safely." crumbs={[{ label: "Facilities", to: "/facilities" }, { label: "Pharmacy" }]}>
        <div className="hero-tools"><SearchBox value={q} onChange={setQ} placeholder="Search medicine or problem" label="Search medicines" /></div>
        <div className="hero-actions">
          <a className="btn btn-wa btn-lg" target="_blank" rel="noreferrer" href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hello, I want to order medicines. I will send the prescription photo.")}`}>Order on WhatsApp</a>
          <a className="btn btn-glass btn-lg" href={`tel:${site.helplineTel}`}>Call pharmacy</a>
        </div>
      </PageHero>

      <section className="section">
        <div className="wrap">
          <div className="notice"><strong>Important:</strong> this guide is general information. It does not replace your doctor's or pharmacist's advice. Never start, stop or change a medicine on your own.</div>
          <Chips options={medicineCategories} value={cat} onChange={setCat} label="Medicine category" />
          <p className="result-count" aria-live="polite">{list.length} {list.length === 1 ? "medicine" : "medicines"}</p>
          {list.length ? (
            <div className="grid-3">{list.map((m) => (<Med key={m.id} m={m} />))}</div>
          ) : (
            <Empty title="No medicine found" text="Try the generic name or the problem it treats. You can also ask our pharmacist." action={<button className="btn btn-primary" onClick={() => { setQ(""); setCat("All"); }}>Clear search</button>} />
          )}
        </div>
      </section>

      <section className="section section-tint">
        <div className="wrap">
          <h2 className="h2">Pharmacy services</h2>
          <div className="grid-3">
            {pharmacyServices.map((s, i) => (<Reveal key={s.title} delay={i * 50}><Tilt className="card problem"><span className="dept-ico" aria-hidden="true">{s.icon}</span><h3>{s.title}</h3><p>{s.text}</p></Tilt></Reveal>))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap grid-2-cols">
          <div>
            <h2 className="h2">Medicine safety, simply answered</h2>
            <p className="lede-dark">The most common questions our pharmacists hear every day.</p>
            <p className="related">Not sure which doctor to see? <Link className="textlink" to="/departments">Search departments</Link></p>
          </div>
          <Accordion items={pharmacyGuides} />
        </div>
      </section>
    </>
  );
}
