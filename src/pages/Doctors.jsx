import { useMemo, useState } from "react";
import { PageHero, SearchBox, Reveal, Empty } from "../components/ui";
import { DoctorCard } from "../components/Cards";
import doctors from "../data/doctors";
import departments from "../data/departments";

export default function Doctors() {
  const [q, setQ] = useState("");
  const [dept, setDept] = useState("");
  const [gender, setGender] = useState("");
  const [day, setDay] = useState("");
  const [sort, setSort] = useState("name");

  const list = useMemo(() => {
    const s = q.trim().toLowerCase();
    const out = doctors.filter((d) => {
      if (dept && d.departmentSlug !== dept) return false;
      if (gender && d.gender !== gender) return false;
      if (day && !d.days.includes(day)) return false;
      if (!s) return true;
      return [d.name, d.department, d.designation, d.qualification, ...d.focus].join(" ").toLowerCase().includes(s);
    });
    const by = { name: (a, b) => a.name.replace(/^(Prof\. )?(Dr\.|Ms\.) /, "").localeCompare(b.name.replace(/^(Prof\. )?(Dr\.|Ms\.) /, "")), exp: (a, b) => b.experience - a.experience, fee: (a, b) => a.fee - b.fee, rating: (a, b) => b.rating - a.rating };
    return out.sort(by[sort]);
  }, [q, dept, gender, day, sort]);

  const reset = () => { setQ(""); setDept(""); setGender(""); setDay(""); setSort("name"); };

  return (
    <>
      <PageHero eyebrow="Our doctors" title="Find a doctor" text={`${doctors.length} specialists across ${departments.length} departments. Search by name, condition or procedure.`} crumbs={[{ label: "Doctors" }]}>
        <div className="hero-tools">
          <SearchBox value={q} onChange={setQ} placeholder="Search doctor, condition or procedure" label="Search doctors" />
        </div>
      </PageHero>
      <section className="section">
        <div className="wrap">
          <div className="filters" role="search">
            <label>Department
              <select value={dept} onChange={(e) => setDept(e.target.value)}>
                <option value="">All departments</option>
                {departments.map((d) => (<option key={d.slug} value={d.slug}>{d.name}</option>))}
              </select>
            </label>
            <label>Available on
              <select value={day} onChange={(e) => setDay(e.target.value)}>
                <option value="">Any day</option>
                {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((x) => (<option key={x} value={x}>{x}</option>))}
              </select>
            </label>
            <label>Doctor
              <select value={gender} onChange={(e) => setGender(e.target.value)}>
                <option value="">Any</option><option value="f">Female doctor</option><option value="m">Male doctor</option>
              </select>
            </label>
            <label>Sort by
              <select value={sort} onChange={(e) => setSort(e.target.value)}>
                <option value="name">Name</option><option value="exp">Most experienced</option><option value="rating">Top rated</option><option value="fee">Lowest fee</option>
              </select>
            </label>
            <button type="button" className="btn btn-ghost" onClick={reset}>Reset</button>
          </div>
          <p className="result-count" aria-live="polite">{list.length} {list.length === 1 ? "doctor" : "doctors"} found</p>
          {list.length ? (
            <div className="grid-3">{list.map((d, i) => (<Reveal key={d.id} delay={(i % 6) * 40}><DoctorCard doc={d} /></Reveal>))}</div>
          ) : (
            <Empty title="No doctor matches these filters" text="Remove a filter or search by the body part. The helpline can also match you to a doctor." action={<button className="btn btn-primary" onClick={reset}>Reset filters</button>} />
          )}
        </div>
      </section>
    </>
  );
}
