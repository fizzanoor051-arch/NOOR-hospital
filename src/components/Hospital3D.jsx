import { useEffect, useRef } from "react";
import doctors from "../data/doctors";
import departments from "../data/departments";

/* A cuboid made of five CSS faces. Units are px; x/y/z are the centre offsets. */
function Block({ w, h, d, x = 0, y = 0, z = 0, tone = "wall", win = false, className = "", children }) {
  const style = { "--w": w, "--h": h, "--d": d, "--x": x, "--y": y, "--z": z };
  const f = win ? "f win" : "f";
  return (
    <div className={`blk tone-${tone} ${className}`} style={style}>
      <div className={`${f} fr`} /><div className={`${f} bk`} />
      <div className={`${f} lf`} /><div className={`${f} rt`} />
      <div className="f tp" />
      {children}
    </div>
  );
}

/* Hero: a glass hospital tower that sways and follows the pointer. */
export function HospitalScene() {
  const stage = useRef(null);
  useEffect(() => {
    const el = stage.current;
    if (!el) return;
    const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    let tx = 0, ty = 0, cx = 0, cy = 0, raf;
    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      tx = ((e.clientX - (r.left + r.width / 2)) / window.innerWidth) * 36;
      ty = ((e.clientY - (r.top + r.height / 2)) / window.innerHeight) * -14;
    };
    const loop = () => {
      cx += (tx - cx) * 0.06; cy += (ty - cy) * 0.06;
      el.style.setProperty("--mx", `${cx.toFixed(2)}deg`);
      el.style.setProperty("--my", `${cy.toFixed(2)}deg`);
      raf = requestAnimationFrame(loop);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    raf = requestAnimationFrame(loop);
    return () => { window.removeEventListener("pointermove", onMove); cancelAnimationFrame(raf); };
  }, []);

  return (
    <div className="scene" ref={stage} aria-hidden="true">
      <div className="scene-tilt">
        <div className="scene-sway">
          <div className="ground"><span /><span /><span /></div>
          <div className="city">
            <Block w={60} h={90} d={60} x={-250} y={-45} z={-70} tone="far" win />
            <Block w={50} h={130} d={50} x={-300} y={-65} z={50} tone="far" win />
            <Block w={70} h={70} d={60} x={260} y={-35} z={-60} tone="far" win />
            <Block w={50} h={110} d={50} x={310} y={-55} z={60} tone="far" win />
          </div>
          {/* podium */}
          <Block w={380} h={46} d={230} y={-23} tone="base" win />
          {/* wings */}
          <Block w={110} h={190} d={150} x={-140} y={-141} z={0} tone="wall" win />
          <Block w={110} h={190} d={150} x={140} y={-141} z={0} tone="wall" win />
          {/* main tower */}
          <Block w={150} h={300} d={170} y={-196} tone="glass" win className="tower" />
          {/* sky bridge */}
          <Block w={120} h={20} d={40} x={0} y={-110} z={95} tone="glass" win />
          {/* entrance canopy */}
          <Block w={120} h={10} d={60} y={-52} z={140} tone="accent" />
          {/* roof and cross */}
          <Block w={160} h={10} d={180} y={-351} tone="base" />
          <div className="cross3d" style={{ "--y": -400 }}>
            <Block w={16} h={64} d={16} tone="cross" />
            <Block w={64} h={16} d={16} tone="cross" />
          </div>
          {/* helipad */}
          <Block w={80} h={4} d={80} x={-140} y={-238} tone="heli" />
          {/* ambulance */}
          <div className="ambulance">
            <Block w={78} h={34} d={34} y={-28} tone="amb" />
            <Block w={26} h={26} d={32} x={32} y={-24} tone="ambcab" />
            <Block w={10} h={10} d={10} x={-22} y={-50} tone="siren" className="siren" />
          </div>
        </div>
      </div>
      <div className="orbit o1"><b>24/7</b><span>Emergency</span></div>
      <div className="orbit o2"><b>{doctors.length}</b><span>Specialists</span></div>
      <div className="orbit o3"><b>{departments.length}</b><span>Departments</span></div>
    </div>
  );
}

/* A rotating DNA helix, built from 3D dot pairs. */
export function Helix({ rungs = 16 }) {
  return (
    <div className="helix" aria-hidden="true">
      <div className="helix-spin">
        {Array.from({ length: rungs }).map((_, i) => (
          <div key={i} className="rung" style={{ "--i": i, "--n": rungs }}>
            <span /><em /><span />
          </div>
        ))}
      </div>
    </div>
  );
}

/* Interactive 3D floor stack: glowing floor plates; the list beside it is the accessible control. */
export function FloorStack({ floors, active, onPick }) {
  const top = [...floors].reverse();
  return (
    <div className="stack-wrap">
      <div className="stack" aria-hidden="true">
        {floors.map((f, i) => (
          <div
            key={f.floor}
            className={`slab ${active === f.floor ? "on" : ""} ${active && active !== f.floor ? "dim" : ""}`}
            style={{ "--i": i }}
            onClick={() => onPick(f.floor)}
          >
            <span className="slab-rooms" />
          </div>
        ))}
      </div>
      <div className="floor-tabs" role="tablist" aria-label="Hospital floors">
        {top.map((f) => (
          <button type="button" role="tab" key={f.floor} aria-selected={active === f.floor} className={active === f.floor ? "on" : ""} onClick={() => onPick(f.floor)}>
            {f.floor}
          </button>
        ))}
      </div>
    </div>
  );
}
