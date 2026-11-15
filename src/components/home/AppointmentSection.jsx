import { Link } from "react-router-dom";

function AppointmentSection() {
  return (
    <section
      id="appointment"
      className="appointment-section"
    >

      <div className="appointment-content">

        <span className="section-label">
          APPOINTMENTS
        </span>

        <h2>
          Book Your
          <br />
          <strong>Appointment</strong>
        </h2>

        <p>
          Choose your doctor and preferred
          consultation time.
        </p>

        <Link
          to="/doctors"
          className="appointment-button"
        >
          Choose a Doctor →
        </Link>

      </div>

      <div className="appointment-info">

        <div>
          <span>📅</span>
          <strong>Easy Booking</strong>
          <p>Simple appointment process.</p>
        </div>

        <div>
          <span>👨‍⚕️</span>
          <strong>Expert Doctors</strong>
          <p>Qualified specialists.</p>
        </div>

        <div>
          <span>🕐</span>
          <strong>Flexible Hours</strong>
          <p>Multiple consultation timings.</p>
        </div>

      </div>

    </section>
  );
}

export default AppointmentSection;