import { useMemo, useState } from "react";
import { PageHero, SearchBox, Chips, Reveal, Tilt, Accordion, Empty } from "../components/ui";
import { labTests, labCategories, labPackages, labFaq } from "../data/lab";
import { site } from "../data/site";

export default function Laboratory() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("All");
  const list = useMemo(() => {
    const s = q.trim().toLowerCase();
    return labTests.filter((t) => (cat === "All" || t.category === cat) && (!s || [t.name, t.why, t.shows].join(" ").toLowerCase().includes(s)));
  }, [q, cat]);

  return (
    <>
      <PageHero eyebrow="Facilities · lab open 24 hours" title="Know your test before you take it" text="Why it is done, how to prepare and what the result tells you. Search any blood test, scan or screening." crumbs={[{ label: "Facilities", to: "/facilities" }, { label: "Laboratory & imaging" }]}>
        <div className="hero-tools"><SearchBox value={q} onChange={setQ} placeholder="Search a test, e.g. HbA1c, MRI, thyroid" label="Search tests" /></div>
        <div className="hero-actions">
          <a className="btn btn-primary btn-lg" target="_blank" rel="noreferrer" href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hello, I want to book a home blood sample collection.")}`}>Book home sample collection</a>
          <a className="btn btn-glass btn-lg" href={`tel:${site.helplineTel}`}>Call lab</a>
        </div>
      </PageHero>

      <section className="section">
        <div className="wrap">
          <Chips options={labCategories} value={cat} onChange={setCat} label="Test category" />
          <p className="result-count" aria-live="polite">{list.length} {list.length === 1 ? "test" : "tests"}</p>
          {list.length ? (
            <div className="grid-3">
              {list.map((t) => (
                <Tilt key={t.id} className="card test" as="article">
                  <span className="tag">{t.category}</span>
                  <h3>{t.name}</h3>
                  <p>{t.why}</p>
                  <dl className="mini-dl">
                    <div><dt>Prepare</dt><dd>{t.prep}</dd></div>
                    <div><dt>Result</dt><dd>{t.report}</dd></div>
                    <div><dt>It shows</dt><dd>{t.shows}</dd></div>
                  </dl>
                </Tilt>
              ))}
            </div>
          ) : (<Empty title="No test found" text="Try a simpler word. Your doctor can also tell you which test you need." action={<button className="btn btn-primary" onClick={() => { setQ(""); setCat("All"); }}>Clear search</button>} />)}
        </div>
      </section>

      <section className="section section-tint">
        <div className="wrap">
          <h2 className="h2">Health check-up packages</h2>
          <div className="grid-3">
            {labPackages.map((p, i) => (
              <Reveal key={p.name} delay={i * 50}>
                <Tilt className="card pkg"><h3>{p.name}</h3><p className="hint">Best for: {p.for}</p>
                  <ul className="checks">{p.tests.map((t) => (<li key={t}>{t}</li>))}</ul></Tilt>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap grid-2-cols">
          <div><h2 className="h2">Before you come</h2><p className="lede-dark">Small mistakes in preparation are the most common reason for repeat tests.</p></div>
          <Accordion items={labFaq} />
        </div>
      </section>
    </>
  );
}
