import { useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import departments from "../data/departments";
import doctors, { getDoctor } from "../data/doctors";
import { site } from "../data/site";

const DAY = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const KEY = "noor_appointments_v1";

const pad = (n) => String(n).padStart(2, "0");
const toISO = (d) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
const parseISO = (s) => { const [y, m, d] = s.split("-").map(Number); return new Date(y, m - 1, d); };
const prettyDate = (s) => parseISO(s).toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long", year: "numeric" });

export function loadAppointments() {
  try { return JSON.parse(localStorage.getItem(KEY) || "[]"); } catch { return []; }
}
function saveAppointments(list) {
  try { localStorage.setItem(KEY, JSON.stringify(list)); } catch { /* storage unavailable */ }
}
function makeRef() {
  const d = new Date();
  return `NH-${String(d.getFullYear()).slice(2)}${pad(d.getMonth() + 1)}${pad(d.getDate())}-${Math.random().toString(36).slice(2, 6).toUpperCase()}`;
}

export default function AppointmentForm({ compact = false }) {
  const [params] = useSearchParams();
  const today = toISO(new Date());
  const startDoc = getDoctor(params.get("doctor"));
  const startDept = startDoc ? startDoc.departmentSlug : params.get("dept") || "";

  const [f, setF] = useState({
    dept: startDept, doctor: startDoc ? String(startDoc.id) : "", date: "", time: "",
    name: "", phone: "", email: "", age: "", gender: "", reason: "", visit: "new",
  });
  const [errors, setErrors] = useState({});
  const [done, setDone] = useState(null);

  useEffect(() => {
    const d = getDoctor(params.get("doctor"));
    if (d) setF((p) => ({ ...p, dept: d.departmentSlug, doctor: String(d.id), time: "" }));
    else if (params.get("dept")) setF((p) => ({ ...p, dept: params.get("dept"), doctor: "" }));
  }, [params]);

  const doctorList = useMemo(() => doctors.filter((d) => !f.dept || d.departmentSlug === f.dept), [f.dept]);
  const doc = f.doctor ? getDoctor(f.doctor) : null;
  const slots = doc ? doc.slots : ["09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "04:00 PM", "05:00 PM", "06:00 PM", "07:00 PM"];

  const set = (k) => (e) => {
    const v = e.target.value;
    setF((p) => {
      const n = { ...p, [k]: v };
      if (k === "dept") { n.doctor = ""; n.time = ""; }
      if (k === "doctor") n.time = "";
      return n;
    });
    setErrors((p) => ({ ...p, [k]: undefined }));
  };

  const validate = () => {
    const e = {};
    if (!f.dept) e.dept = "Choose a department.";
    if (!f.doctor) e.doctor = "Choose a doctor.";
    if (!f.date) e.date = "Pick a date.";
    else if (f.date < today) e.date = "Pick today or a later date.";
    else if (doc && !doc.days.includes(DAY[parseISO(f.date).getDay()])) e.date = `${doc.name} sees patients on ${doc.days.join(", ")}.`;
    if (!f.time) e.time = "Choose a time slot.";
    if (f.name.trim().length < 3) e.name = "Enter the patient's full name.";
    const digits = f.phone.replace(/\D/g, "");
    if (digits.length < 10 || digits.length > 13) e.phone = "Enter a valid phone number, for example 0300 1234567.";
    if (f.email && !/^\S+@\S+\.\S+$/.test(f.email)) e.email = "Enter a valid email or leave it empty.";
    const age = Number(f.age);
    if (!f.age || age < 0 || age > 120) e.age = "Enter age between 0 and 120.";
    if (!f.gender) e.gender = "Select gender.";
    return e;
  };

  const submit = (ev) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) {
      const first = document.querySelector("[data-err='true']");
      if (first) first.focus();
      return;
    }
    const appt = {
      ref: makeRef(), createdAt: new Date().toISOString(), status: "Pending confirmation",
      dept: departments.find((d) => d.slug === f.dept)?.name, doctor: doc.name, doctorId: doc.id,
      date: f.date, time: f.time, name: f.name.trim(), phone: f.phone.trim(), email: f.email.trim(),
      age: f.age, gender: f.gender, visit: f.visit, reason: f.reason.trim(), fee: doc.fee,
    };
    saveAppointments([appt, ...loadAppointments()]);
    setDone(appt);
    window.scrollTo({ top: document.getElementById("appt-top")?.offsetTop ?? 0, behavior: "smooth" });
  };

  if (done) return <Confirmation appt={done} onNew={() => { setDone(null); setF((p) => ({ ...p, doctor: "", dept: "", date: "", time: "", reason: "" })); }} />;

  const field = (k) => ({ id: `f-${k}`, value: f[k], onChange: set(k), "aria-invalid": !!errors[k], "data-err": errors[k] ? "true" : undefined, "aria-describedby": errors[k] ? `e-${k}` : undefined });
  const err = (k) => errors[k] && <p className="err" id={`e-${k}`} role="alert">{errors[k]}</p>;

  return (
    <form className={`form ${compact ? "compact" : ""}`} onSubmit={submit} noValidate id="appt-top">
      <div className="grid-2">
        <div className="fld">
          <label htmlFor="f-dept">Department</label>
          <select {...field("dept")}>
            <option value="">Select department</option>
            {departments.map((d) => (<option key={d.slug} value={d.slug}>{d.name}</option>))}
          </select>
          {err("dept")}
        </div>
        <div className="fld">
          <label htmlFor="f-doctor">Doctor</label>
          <select {...field("doctor")}>
            <option value="">{f.dept ? "Select doctor" : "Select doctor (any department)"}</option>
            {doctorList.map((d) => (<option key={d.id} value={d.id}>{d.name} · {d.designation}</option>))}
          </select>
          {err("doctor")}
        </div>
        <div className="fld">
          <label htmlFor="f-date">Preferred date</label>
          <input type="date" min={today} {...field("date")} />
          {doc && !errors.date && <p className="hint">Available: {doc.days.join(", ")}</p>}
          {err("date")}
        </div>
        <div className="fld">
          <label htmlFor="f-time">Time slot</label>
          <select {...field("time")}>
            <option value="">Select time</option>
            {slots.map((s) => (<option key={s} value={s}>{s}</option>))}
          </select>
          {err("time")}
        </div>
        <div className="fld">
          <label htmlFor="f-name">Patient name</label>
          <input type="text" autoComplete="name" placeholder="Full name" {...field("name")} />
          {err("name")}
        </div>
        <div className="fld">
          <label htmlFor="f-phone">Phone / WhatsApp</label>
          <input type="tel" autoComplete="tel" inputMode="tel" placeholder="0300 1234567" {...field("phone")} />
          {err("phone")}
        </div>
        <div className="fld">
          <label htmlFor="f-age">Age</label>
          <input type="number" min="0" max="120" inputMode="numeric" placeholder="Years" {...field("age")} />
          {err("age")}
        </div>
        <div className="fld">
          <label htmlFor="f-gender">Gender</label>
          <select {...field("gender")}>
            <option value="">Select</option><option value="Female">Female</option><option value="Male">Male</option><option value="Other">Other</option>
          </select>
          {err("gender")}
        </div>
        {!compact && (
          <>
            <div className="fld">
              <label htmlFor="f-email">Email (optional)</label>
              <input type="email" autoComplete="email" placeholder="you@example.com" {...field("email")} />
              {err("email")}
            </div>
            <div className="fld">
              <label htmlFor="f-visit">Type of visit</label>
              <select {...field("visit")}>
                <option value="new">First visit</option><option value="follow">Follow-up</option><option value="second">Second opinion</option>
              </select>
            </div>
            <div className="fld span-2">
              <label htmlFor="f-reason">Main problem (optional)</label>
              <textarea rows="3" placeholder="Describe symptoms in a few words" {...field("reason")} />
            </div>
          </>
        )}
      </div>
      {doc && (
        <p className="fee-line">Consultation fee: <strong>{doc.fee ? `PKR ${doc.fee.toLocaleString()}` : "as per referral, paid at the counter"}</strong></p>
      )}
      <div className="form-actions">
        <button type="submit" className="btn btn-primary btn-lg">Request appointment</button>
        {compact && <Link to="/appointment" className="btn btn-ghost btn-lg">More options</Link>}
      </div>
      <p className="hint">This is not for emergencies. In an emergency call <a href={`tel:${site.emergency}`}>{site.emergency}</a>.</p>
    </form>
  );
}

function Confirmation({ appt, onNew }) {
  const msg = `Appointment request ${appt.ref}\nPatient: ${appt.name} (${appt.age}, ${appt.gender})\nDoctor: ${appt.doctor} – ${appt.dept}\nDate: ${prettyDate(appt.date)}, ${appt.time}\nPhone: ${appt.phone}${appt.reason ? `\nProblem: ${appt.reason}` : ""}`;
  return (
    <div className="confirm" id="appt-top" role="status">
      <div className="confirm-check" aria-hidden="true"><svg viewBox="0 0 24 24" width="34" height="34"><path d="m5 12.500 4.500 4.500L19 7.500" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></svg></div>
      <h3>Request ready. Send it to confirm.</h3>
      <p>Your reference is <strong>{appt.ref}</strong>. It is saved on this device. Send the details to our appointment desk so staff can confirm your slot.</p>
      <dl className="confirm-grid">
        <div><dt>Patient</dt><dd>{appt.name}</dd></div>
        <div><dt>Doctor</dt><dd>{appt.doctor}</dd></div>
        <div><dt>Department</dt><dd>{appt.dept}</dd></div>
        <div><dt>When</dt><dd>{prettyDate(appt.date)}<br />{appt.time}</dd></div>
      </dl>
      <div className="form-actions">
        <a className="btn btn-wa btn-lg" target="_blank" rel="noreferrer" href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(msg)}`}>Send on WhatsApp</a>
        <a className="btn btn-primary btn-lg" href={`mailto:${site.email}?subject=${encodeURIComponent(`Appointment request ${appt.ref}`)}&body=${encodeURIComponent(msg)}`}>Send by email</a>
        <button type="button" className="btn btn-ghost btn-lg" onClick={() => window.print()}>Print</button>
        <button type="button" className="btn btn-ghost btn-lg" onClick={onNew}>Book another</button>
      </div>
      <p className="hint">Please arrive 15 minutes early with your CNIC and previous reports.</p>
    </div>
  );
}

export function MyAppointments() {
  const [list, setList] = useState(loadAppointments);
  if (!list.length) return null;
  const cancel = (ref) => { const n = list.filter((a) => a.ref !== ref); saveAppointments(n); setList(n); };
  return (
    <div className="my-appts">
      <h3>Your requests on this device</h3>
      <ul>
        {list.map((a) => (
          <li key={a.ref}>
            <div><strong>{a.doctor}</strong><span>{a.dept}</span></div>
            <div><span>{prettyDate(a.date)}</span><span>{a.time}</span></div>
            <code>{a.ref}</code>
            <button type="button" className="btn btn-ghost btn-sm" onClick={() => cancel(a.ref)} aria-label={`Remove request ${a.ref}`}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
