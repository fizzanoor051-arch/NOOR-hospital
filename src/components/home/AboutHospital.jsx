import { Link } from "react-router-dom";

function AboutHospital() {
  return (
    <section
      id="about"
      className="about-section"
    >

      <div className="about-content">

        <span className="section-label">
          ABOUT OUR HOSPITAL
        </span>

        <h2>
          Healthcare Built
          <br />
          Around <strong>You</strong>
        </h2>

        <p>
          We are committed to providing safe,
          accessible and compassionate healthcare
          through experienced doctors, skilled nurses
          and modern medical facilities.
        </p>

        <p>
          From routine consultations to advanced
          treatment and emergency care, our hospital
          brings multiple medical specialties together
          in one trusted healthcare environment.
        </p>

        <Link
          to="/doctors"
          className="learn-more"
        >
          Meet Our Doctors →
        </Link>

      </div>

      <div className="about-stats">

        <div className="stat-box">
          <strong>25+</strong>
          <span>Medical Departments</span>
        </div>

        <div className="stat-box">
          <strong>100+</strong>
          <span>Qualified Doctors</span>
        </div>

        <div className="stat-box">
          <strong>250+</strong>
          <span>Nursing Staff</span>
        </div>

        <div className="stat-box">
          <strong>24/7</strong>
          <span>Emergency Service</span>
        </div>

      </div>

    </section>
  );
}

export default AboutHospital;