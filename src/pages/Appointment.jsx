import { PageHero, Reveal } from "../components/ui";
import AppointmentForm, { MyAppointments } from "../components/AppointmentForm";
import { site } from "../data/site";

export default function Appointment() {
  return (
    <>
      <PageHero eyebrow="Appointments" title="Book an appointment" text="Choose your doctor, pick one of their working days and send the request. We show only real clinic days and slots." crumbs={[{ label: "Appointment" }]} />
      <section className="section">
        <div className="wrap appt-page">
          <Reveal className="card form-card"><AppointmentForm /></Reveal>
          <aside className="appt-side">
            <div className="card side-card"><h3>Prefer to talk?</h3>
              <p><a className="textlink" href={`tel:${site.helplineTel}`}>{site.helpline}</a></p>
              <p><a className="textlink" href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noreferrer">WhatsApp us</a></p>
              <p><a className="textlink" href={`mailto:${site.email}`}>{site.email}</a></p></div>
            <div className="card side-card"><h3>Bring with you</h3>
              <ul className="checks"><li>CNIC (and insurance or Sehat card)</li><li>Previous reports and X-rays</li><li>List of medicines you take</li><li>Arrive 15 minutes early</li></ul></div>
            <div className="card side-card emg"><h3>Is it an emergency?</h3><p>Do not book. Call <a href={`tel:${site.emergency}`}><strong>{site.emergency}</strong></a> or come straight to the Emergency department.</p></div>
          </aside>
        </div>
        <div className="wrap"><MyAppointments /></div>
      </section>
    </>
  );
}
