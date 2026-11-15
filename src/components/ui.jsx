import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

/* Reveal: fades content in once when it enters the viewport (respects reduced motion). */
export function Reveal({ children, delay = 0, as: Tag = "div", className = "", ...rest }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") { setShown(true); return; }
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setShown(true); io.disconnect(); }
    }, { threshold: 0.12 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <Tag ref={ref} className={`reveal ${shown ? "is-in" : ""} ${className}`} style={{ transitionDelay: `${delay}ms` }} {...rest}>
      {children}
    </Tag>
  );
}

/* Tilt: 3D card that follows the pointer. */
export function Tilt({ children, className = "", max = 9, as: Tag = "div", ...rest }) {
  const ref = useRef(null);
  const move = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.setProperty("--rx", `${(-py * max).toFixed(2)}deg`);
    el.style.setProperty("--ry", `${(px * max).toFixed(2)}deg`);
    el.style.setProperty("--gx", `${((px + 0.5) * 100).toFixed(0)}%`);
    el.style.setProperty("--gy", `${((py + 0.5) * 100).toFixed(0)}%`);
  };
  const leave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
  };
  return (
    <Tag ref={ref} className={`tilt ${className}`} onPointerMove={move} onPointerLeave={leave} {...rest}>
      {children}
    </Tag>
  );
}

export function CountUp({ to, suffix = "", duration = 1400 }) {
  const ref = useRef(null);
  const [val, setVal] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || typeof IntersectionObserver === "undefined") { setVal(to); return; }
    let raf;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const t0 = performance.now();
      const tick = (t) => {
        const p = Math.min(1, (t - t0) / duration);
        setVal(Math.round(to * (1 - Math.pow(1 - p, 3))));
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    }, { threshold: 0.4 });
    io.observe(el);
    return () => { io.disconnect(); cancelAnimationFrame(raf); };
  }, [to, duration]);
  return <span ref={ref}>{val.toLocaleString()}{suffix}</span>;
}

export function SectionHead({ eyebrow, title, text, align = "left", light = false }) {
  return (
    <Reveal className={`sec-head ${align === "center" ? "center" : ""} ${light ? "light" : ""}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {text && <p className="lede">{text}</p>}
    </Reveal>
  );
}

export function PageHero({ eyebrow, title, text, crumbs = [], children, tone = "navy" }) {
  return (
    <section className={`page-hero tone-${tone}`}>
      <div className="page-hero-3d" aria-hidden="true">
        <i /><i /><i /><i /><i /><i />
      </div>
      <div className="wrap page-hero-in">
        <nav className="crumbs" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          {crumbs.map((c) => (
            <span key={c.label}>
              <b aria-hidden="true">/</b>
              {c.to ? <Link to={c.to}>{c.label}</Link> : <span aria-current="page">{c.label}</span>}
            </span>
          ))}
        </nav>
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1>{title}</h1>
        {text && <p className="lede">{text}</p>}
        {children}
      </div>
    </section>
  );
}

export function Accordion({ items }) {
  const [open, setOpen] = useState(0);
  return (
    <div className="acc">
      {items.map((it, i) => (
        <div key={it.q} className={`acc-item ${open === i ? "open" : ""}`}>
          <button type="button" aria-expanded={open === i} onClick={() => setOpen(open === i ? -1 : i)}>
            <span>{it.q}</span>
            <i aria-hidden="true" />
          </button>
          <div className="acc-body" hidden={open !== i}><p>{it.a}</p></div>
        </div>
      ))}
    </div>
  );
}

export function Chips({ options, value, onChange, label }) {
  return (
    <div className="chips" role="group" aria-label={label}>
      {options.map((o) => {
        const id = typeof o === "string" ? o : o.id;
        const text = typeof o === "string" ? o : o.label;
        return (
          <button type="button" key={id} className={value === id ? "on" : ""} aria-pressed={value === id} onClick={() => onChange(id)}>
            {text}
          </button>
        );
      })}
    </div>
  );
}

export function SearchBox({ value, onChange, placeholder, label }) {
  return (
    <label className="searchbox">
      <span className="sr">{label || placeholder}</span>
      <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><circle cx="11" cy="11" r="7" fill="none" stroke="currentColor" strokeWidth="2" /><path d="m20 20-4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
      <input type="search" value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} />
      {value && <button type="button" className="clear" onClick={() => onChange("")} aria-label="Clear search">×</button>}
    </label>
  );
}

export function Avatar({ name, gender = "m", size = 72 }) {
  const initials = name.replace(/^(Prof\.|Dr\.|Ms\.|Mr\.)\s*/g, "").replace(/^(Dr\.|Prof\.)\s*/g, "").split(" ").filter(Boolean).slice(0, 2).map((s) => s[0]).join("");
  const hue = [...name].reduce((a, c) => a + c.charCodeAt(0), 0) % 360;
  return (
    <span className="avatar" style={{ width: size, height: size, fontSize: size * 0.34, "--h": hue }} role="img" aria-label={name}>
      <span>{initials}</span>
      <svg viewBox="0 0 24 24" className="avatar-cross" aria-hidden="true"><path d="M9 3h6v6h6v6h-6v6H9v-6H3V9h6z" fill="currentColor" /></svg>
      <small className="sr">{gender === "f" ? "Female doctor" : "Male doctor"}</small>
    </span>
  );
}

export function Empty({ title, text, action }) {
  return (
    <div className="empty">
      <div className="empty-ico" aria-hidden="true">🔎</div>
      <h3>{title}</h3>
      <p>{text}</p>
      {action}
    </div>
  );
}

export function Stars({ value }) {
  return <span className="stars" aria-label={`Rated ${value} out of 5`}>★ {value}</span>;
}
