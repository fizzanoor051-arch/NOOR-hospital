import { useMemo, useState } from "react";
import { PageHero, Chips, SearchBox, Reveal, Empty } from "../components/ui";
import { DepartmentCard } from "../components/Cards";
import departments, { departmentGroups } from "../data/departments";
import doctors from "../data/doctors";

export default function Departments() {
  const [q, setQ] = useState("");
  const [group, setGroup] = useState("all");

  const list = useMemo(() => {
    const s = q.trim().toLowerCase();
    return departments.filter((d) => {
      const inGroup = group === "all" || d.group === group;
      if (!s) return inGroup;
      const hay = [d.name, d.tagline, d.about, ...d.treats, ...d.procedures].join(" ").toLowerCase();
      return inGroup && hay.includes(s);
    });
  }, [q, group]);

  return (
    <>
      <PageHero eyebrow="Departments" title="Find the right department" text="Search by a disease, symptom or treatment, for example “kidney stone”, “migraine” or “knee pain”, and we show where to go." crumbs={[{ label: "Departments" }]}>
        <div className="hero-tools">
          <SearchBox value={q} onChange={setQ} placeholder="Search disease, symptom or department" label="Search departments" />
          <Chips options={departmentGroups} value={group} onChange={setGroup} label="Department group" />
        </div>
      </PageHero>
      <section className="section">
        <div className="wrap">
          <p className="result-count" aria-live="polite">{list.length} {list.length === 1 ? "department" : "departments"}</p>
          {list.length ? (
            <div className="grid-3">
              {list.map((d, i) => (<Reveal key={d.slug} delay={(i % 6) * 40}><DepartmentCard dept={d} count={doctors.filter((x) => x.departmentSlug === d.slug).length} /></Reveal>))}
            </div>
          ) : (
            <Empty title="No department matches your search" text="Try a simpler word, such as the body part. Or call the helpline and we will guide you." action={<button className="btn btn-primary" onClick={() => { setQ(""); setGroup("all"); }}>Clear search</button>} />
          )}
        </div>
      </section>
    </>
  );
}
