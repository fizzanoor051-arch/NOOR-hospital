import { Link } from "react-router-dom";
import doctorsData from "../../data/doctorsData";

function DoctorsPreview() {
  return (
    <section
      id="doctors"
      className="doctors-section"
    >

      <div className="section-heading">

        <span className="section-label">
          OUR MEDICAL TEAM
        </span>

        <h2>
          Meet Our
          <br />
          <strong>Specialists</strong>
        </h2>

        <p>
          Experienced healthcare professionals
          dedicated to your wellbeing.
        </p>

      </div>

      <div className="doctor-preview-grid">

        {doctorsData
          .slice(0, 3)
          .map((doctor) => (
            <div
              className="doctor-preview"
              key={doctor.id}
            >

              <div className="doctor-avatar">
                {doctor.icon}
              </div>

              <span>
                {doctor.specialty}
              </span>

              <h3>
                {doctor.name}
              </h3>

              <p>
                {doctor.qualification}
              </p>

              <Link
                to={`/doctors/${doctor.id}`}
              >
                View Profile →
              </Link>

            </div>
          ))}

      </div>

      <div
        style={{
          textAlign: "center",
          marginTop: "35px",
        }}
      >

        <Link
          to="/doctors"
          className="hero-primary"
        >
          View All Doctors →
        </Link>

      </div>

    </section>
  );
}

export default DoctorsPreview;