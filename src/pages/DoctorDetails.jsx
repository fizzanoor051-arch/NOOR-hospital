import { Link, useParams } from "react-router-dom";
import doctorsData from "../data/doctorsData";

function DoctorDetails() {
  const { id } = useParams();

  const doctor = doctorsData.find(
    (item) => String(item.id) === String(id)
  );

  if (!doctor) {
    return (
      <main className="doctor-details-page">

        <section className="not-found">

          <h1>
            Doctor Not Found
          </h1>

          <p>
            The doctor profile you are looking for
            does not exist.
          </p>

          <Link to="/doctors">
            ← Back to Doctors
          </Link>

        </section>

      </main>
    );
  }

  return (
    <main className="doctor-details-page">

      <section className="doctor-profile">

        <div className="doctor-profile-avatar">
          {doctor.icon}
        </div>

        <div className="doctor-profile-info">

          <span>
            {doctor.specialty}
          </span>

          <h1>
            {doctor.name}
          </h1>

          <h3>
            {doctor.qualification}
          </h3>

          <p>
            {doctor.experience}
          </p>

          <p className="doctor-about">
            {doctor.about}
          </p>

          <div className="doctor-department">
            <strong>
              Department:
            </strong>

            <span>
              {doctor.department}
            </span>
          </div>

          <Link
            to="/doctors"
            className="hero-primary"
          >
            ← Back to Doctors
          </Link>

        </div>

      </section>


      {/* SERVICES */}

      <section className="doctor-services">

        <span className="section-label">
          PROFESSIONAL SERVICES
        </span>

        <h2>
          Areas of
          <br />
          <strong>Expertise</strong>
        </h2>

        <div className="doctor-services-grid">

          {doctor.services?.map((service) => (
            <div
              className="doctor-service-item"
              key={service}
            >
              <span>
                ✓
              </span>

              <p>
                {service}
              </p>
            </div>
          ))}

        </div>

      </section>


      {/* APPOINTMENT */}

      <section className="doctor-appointment">

        <div>

          <span className="section-label">
            APPOINTMENT
          </span>

          <h2>
            Book an Appointment
          </h2>

          <p>
            Choose this specialist for your
            consultation.
          </p>

        </div>

        <Link
          to="/#appointment"
          className="appointment-button"
        >
          Book Appointment →
        </Link>

      </section>

    </main>
  );
}

export default DoctorDetails;