import { useState } from "react";
import { PageHero, Reveal, Accordion } from "../components/ui";
import { site } from "../data/site";
import { faqs } from "../data/facilities";

export default function Contact() {
  const [f, setF] = useState({ name: "", email: "", subject: "Appointment help", message: "" });
  const [err, setErr] = useState({});
  const [sent, setSent] = useState(false);
  const set = (k) => (e) => { setF({ ...f, [k]: e.target.value }); setErr({ ...err, [k]: undefined }); };

  const submit = (e) => {
    e.preventDefault();
    const n = {};
    if (f.name.trim().length < 3) n.name = "Enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(f.email)) n.email = "Enter a valid email address.";
    if (f.message.trim().length < 10) n.message = "Write a few words about how we can help.";
    setErr(n);
    if (Object.keys(n).length) return;
    const body = `Name: ${f.name}\nEmail: ${f.email}\n\n${f.message}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(f.subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <>
      <PageHero eyebrow="Contact" title="We are here to help" text="Call, message or visit. The emergency department never closes." crumbs={[{ label: "Contact" }]} />
      <section className="section">
        <div className="wrap contact-grid">
          <div className="contact-cards">
            <Reveal><a className="card contact-card emg" href={`tel:${site.emergency}`}><small>Emergency</small><strong>{site.emergencyDisplay}</strong><span>24 hours</span></a></Reveal>
            <Reveal delay={60}><a className="card contact-card" href={`tel:${site.helplineTel}`}><small>Helpline & appointments</small><strong>{site.helpline}</strong><span>Mon–Sat, 8 AM – 9 PM</span></a></Reveal>
            <Reveal delay={120}><a className="card contact-card" href={`tel:${site.ambulanceTel}`}><small>Ambulance</small><strong>{site.ambulance}</strong><span>24 hours</span></a></Reveal>
            <Reveal delay={180}><a className="card contact-card" href={`mailto:${site.email}`}><small>General email</small><strong>{site.email}</strong><span>Reply within 1 working day</span></a></Reveal>
            <Reveal delay={240}><a className="card contact-card" href={`mailto:${site.emergencyEmail}`}><small>Emergency email</small><strong>{site.emergencyEmail}</strong><span>Monitored 24 hours</span></a></Reveal>
            <Reveal delay={300}><a className="card contact-card wa" href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noreferrer"><small>WhatsApp</small><strong>Chat with us</strong><span>Reports, appointments, queries</span></a></Reveal>
          </div>
          <Reveal className="card form-card">
            <h2 className="h3">Send a message</h2>
            {sent ? (<p className="ok" role="status">Your email app should open with the message ready. If it did not, write to <a href={`mailto:${site.email}`}>{site.email}</a>.</p>) : null}
            <form className="form" onSubmit={submit} noValidate>
              <div className="fld"><label htmlFor="c-name">Name</label><input id="c-name" value={f.name} onChange={set("name")} autoComplete="name" aria-invalid={!!err.name} />{err.name && <p className="err" role="alert">{err.name}</p>}</div>
              <div className="fld"><label htmlFor="c-email">Email</label><input id="c-email" type="email" value={f.email} onChange={set("email")} autoComplete="email" aria-invalid={!!err.email} />{err.email && <p className="err" role="alert">{err.email}</p>}</div>
              <div className="fld"><label htmlFor="c-sub">Topic</label>
                <select id="c-sub" value={f.subject} onChange={set("subject")}>
                  <option>Appointment help</option><option>Report or bill query</option><option>Blood donation</option><option>Feedback or complaint</option><option>Other</option>
                </select></div>
              <div className="fld"><label htmlFor="c-msg">Message</label><textarea id="c-msg" rows="5" value={f.message} onChange={set("message")} aria-invalid={!!err.message} />{err.message && <p className="err" role="alert">{err.message}</p>}</div>
              <button className="btn btn-primary btn-lg" type="submit">Send message</button>
            </form>
          </Reveal>
        </div>
      </section>
      <section className="section section-tint">
        <div className="wrap grid-2-cols">
          <div>
            <h2 className="h2">Visit us</h2>
            <p className="lede-dark">{site.address}</p>
            <ul className="checks">
              <li>OPD: Mon–Sat, 9:00 AM – 8:00 PM</li><li>Emergency, lab, pharmacy, blood bank: 24 hours</li>
              <li>Visiting hours (wards): 4:00 PM – 7:00 PM</li><li>Parking: basement and front lot, wheelchair access at every entrance</li>
            </ul>
            <a className="btn btn-primary" target="_blank" rel="noreferrer" href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.mapQuery)}`}>Open in Google Maps</a>
          </div>
          <Accordion items={faqs} />
        </div>
      </section>
    </>
  );
}
