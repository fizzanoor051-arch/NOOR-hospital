import { Link } from "react-router-dom";

function Pharmacy() {
  return (
    <section className="pharmacy-section">

      <div className="pharmacy-content">

        <span className="section-label">
          HOSPITAL PHARMACY
        </span>

        <h2>
          Medicines
          <br />
          <strong>When You Need Them.</strong>
        </h2>

        <p>
          Our hospital pharmacy provides essential
          medicines and pharmaceutical support for
          our patients.
        </p>

        <Link
          to="/pharmacy"
          className="hero-primary"
        >
          Visit Pharmacy →
        </Link>

      </div>

      <div className="pharmacy-card">

        <span className="pharmacy-icon">
          💊
        </span>

        <h3>
          24/7 Pharmacy
        </h3>

        <p>
          Available for hospital patients
          around the clock.
        </p>

      </div>

    </section>
  );
}

export default Pharmacy;