import { useState } from "react";
import { Link } from "react-router-dom";
import { PageHero, Accordion } from "../components/ui";
import { FloorStack } from "../components/Hospital3D";
import { hospitalFloors, faqs } from "../data/facilities";
import { site } from "../data/site";

export default function HospitalGuide() {
  const [active, setActive] = useState("Ground");
  const floor = hospitalFloors.find((f) => f.floor === active);
  return (
    <>
      <PageHero eyebrow="Facilities" title="Modern hospital, floor by floor" text="Tap a floor in the 3D model to see what is on it. Wheelchair access, lifts and signs in Urdu and English on every level." crumbs={[{ label: "Facilities", to: "/facilities" }, { label: "Hospital guide" }]} />
      <section className="section">
        <div className="wrap floor-grid">
          <FloorStack floors={hospitalFloors} active={active} onPick={setActive} />
          <div className="card floor-info" aria-live="polite">
            <p className="eyebrow">{active === "Ground" || active === "Basement" ? `${active} level` : `${active} floor`}</p>
            <h2>{floor.floor === "Ground" ? "Ground floor" : floor.floor === "Basement" ? "Basement" : `${floor.floor} floor`}</h2>
            <ul className="checks">{floor.items.map((i) => (<li key={i}>{i}</li>))}</ul>
            <p className="hint">Lost? Ask at the information desk, ground floor, or call <a href={`tel:${site.helplineTel}`}>{site.helpline}</a>.</p>
          </div>
        </div>
      </section>
      <section className="section section-tint">
        <div className="wrap grid-2-cols">
          <div>
            <h2 className="h2">Plan your visit</h2>
            <ul className="checks">
              <li>OPD: Mon–Sat, 9:00 AM – 8:00 PM</li><li>Emergency, lab, pharmacy, blood bank: 24 hours</li>
              <li>Ward visiting: 4:00 PM – 7:00 PM</li><li>Cafeteria, prayer rooms and ATM on the ground floor</li>
            </ul>
            <Link to="/contact" className="btn btn-primary">Directions and contact</Link>
          </div>
          <Accordion items={faqs} />
        </div>
      </section>
    </>
  );
}
