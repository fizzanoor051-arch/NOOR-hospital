import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { site, nav, facilityPages } from "../data/site";
import ProjectVisitTracker from "../analyticsa/ProjectVisitTracker";

function Logo({ light }) {
  return (
    <Link to="/" className={`logo ${light ? "light" : ""}`} aria-label="NOOR Health & Medical Center, home">
      <span className="logo-mark" aria-hidden="true"><i /><i /></span>
      <span className="logo-text"><b>NOOR</b><small>Health & Medical Center</small></span>
    </Link>
  );
}

function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) { setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 60); return; }
    }
    window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
  }, [pathname, hash]);
  return null;
}

export default function Layout() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => { setOpen(false); }, [pathname]);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <ProjectVisitTracker />
      <ScrollManager />
      <a className="skip" href="#main">Skip to content</a>

      <div className="topbar">
        <div className="wrap topbar-in">
          <a className="topbar-emg" href={`tel:${site.emergency}`}>
            <span className="pulse-dot" aria-hidden="true" />
            Emergency <strong>{site.emergencyDisplay}</strong>
          </a>
          <span className="topbar-hide">Emergency, lab, pharmacy and blood bank open 24 hours</span>
          <span className="topbar-links">
            <a href={`tel:${site.helplineTel}`}>{site.helpline}</a>
            <a className="topbar-hide" href={`mailto:${site.email}`}>{site.email}</a>
          </span>
        </div>
      </div>

      <header className={`header ${scrolled ? "scrolled" : ""}`}>
        <div className="wrap header-in">
          <Logo />
          <nav className="nav" aria-label="Main">
            {nav.map((n) => (
              <NavLink key={n.to} to={n.to} end={n.to === "/"} className={({ isActive }) => (isActive ? "active" : "")}>{n.label}</NavLink>
            ))}
          </nav>
          <Link to="/appointment" className="btn btn-primary header-cta">Book appointment</Link>
          <button type="button" className={`burger ${open ? "open" : ""}`} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
            <i /><i /><i />
          </button>
        </div>
      </header>

      <div className={`drawer ${open ? "open" : ""}`} aria-hidden={!open}>
        <nav aria-label="Mobile">
          {nav.map((n) => (<Link key={n.to} to={n.to} tabIndex={open ? 0 : -1}>{n.label}</Link>))}
          <Link to="/appointment" className="btn btn-primary" tabIndex={open ? 0 : -1}>Book appointment</Link>
          <a className="btn btn-emg" href={`tel:${site.emergency}`} tabIndex={open ? 0 : -1}>Call emergency {site.emergencyDisplay}</a>
        </nav>
      </div>

      <main id="main"><Outlet /></main>

      <footer className="footer">
        <div className="wrap footer-grid">
          <div>
            <Logo light />
            <p className="footer-about">Specialist care, 24-hour emergency services and clear answers, all in one place.</p>
            <p className="footer-contact">
              <a href={`tel:${site.emergency}`}>Emergency {site.emergencyDisplay}</a><br />
              <a href={`tel:${site.helplineTel}`}>{site.helpline}</a><br />
              <a href={`mailto:${site.email}`}>{site.email}</a><br />
              <span>{site.address}</span>
            </p>
          </div>
          <div>
            <h3>Care</h3>
            <Link to="/departments">All departments</Link>
            <Link to="/doctors">Find a doctor</Link>
            <Link to="/appointment">Book appointment</Link>
            <Link to="/emergency">Emergency & first aid</Link>
          </div>
          <div>
            <h3>Facilities</h3>
            {facilityPages.map((f) => (<Link key={f.slug} to={`/facilities/${f.slug}`}>{f.title}</Link>))}
          </div>
          <div>
            <h3>Hospital</h3>
            <Link to="/about">About us</Link>
            <Link to="/contact">Contact & directions</Link>
            <Link to="/facilities/hospital">Floor guide</Link>
            <a href={`mailto:${site.emergencyEmail}`}>Emergency email</a>
          </div>
        </div>
        <div className="wrap footer-base">
          <span>© {new Date().getFullYear()} {site.full}. All rights reserved.</span>
          <span>This site gives general health information. It does not replace a doctor's advice.</span>
        </div>
      </footer>

      <div className="fab" aria-label="Quick contact">
        <a className="fab-wa" href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hello NOOR Health, I need help with an appointment.")}`} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp">
          <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true"><path fill="currentColor" d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2Zm5.2 14c-.2.6-1.2 1.2-1.7 1.2-.5.1-1 .2-3.2-.7-2.7-1.1-4.4-3.8-4.5-4-.1-.2-1.100-1.500-1.100-2.800s.7-2 1-2.300c.2-.3.500-.3.700-.3h.5c.2 0 .4 0 .6.500l.800 1.900c.1.200.1.400 0 .600l-.4.600c-.1.200-.3.300-.1.600.2.300.8 1.300 1.700 2.100 1.200 1 2.200 1.300 2.500 1.500.3.100.5.100.7-.1l.9-1.100c.2-.3.400-.2.700-.1l1.800.9c.3.100.5.200.5.300.1.300.1.900-.1 1.500Z" /></svg>
        </a>
        <a className="fab-call" href={`tel:${site.emergency}`} aria-label={`Call emergency ${site.emergencyDisplay}`}>
          <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true"><path fill="currentColor" d="M6.600 10.800a15 15 0 0 0 6.600 6.600l2.200-2.200a1 1 0 0 1 1-.25 11.400 11.400 0 0 0 3.600.6 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.500a1 1 0 0 1 1 1c0 1.300.2 2.500.6 3.600a1 1 0 0 1-.25 1Z" /></svg>
        </a>
      </div>
    </>
  );
}
