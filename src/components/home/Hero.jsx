import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hospital-hero" id="home">

      <div className="hero-content">

        <span className="hero-label">
          ✦ ADVANCED HEALTHCARE ✦
        </span>

        <h2>
          Your Health.
          <br />
          <strong>Our Priority.</strong>
        </h2>

        <p>
          Compassionate healthcare, advanced technology
          and experienced medical professionals —
          all under one roof.
        </p>

        <div className="hero-buttons">

          <a
            href="#appointment"
            className="hero-primary"
          >
            Book an Appointment →
          </a>

          <Link
            to="/doctors"
            className="hero-secondary"
          >
            Find a Doctor
          </Link>

        </div>

      </div>

      <div className="hero-medical-card">

        <div className="medical-cross">
          ✚
        </div>

        <span>
          24 / 7
        </span>

        <h3>
          Emergency
          <br />
          Care
        </h3>

        <p>
          Immediate medical attention whenever
          you need it.
        </p>

        <a href="#emergency">
          Emergency Services →
        </a>

      </div>

    </section>
  );
}

export default Hero;