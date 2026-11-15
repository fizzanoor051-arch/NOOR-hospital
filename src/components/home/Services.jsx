import { Link } from "react-router-dom";

const services = [
  {
    icon: "🩺",
    title: "General Consultation",
    text: "Professional medical consultation for everyday health concerns.",
  },
  {
    icon: "🧪",
    title: "Diagnostic Services",
    text: "Reliable laboratory and diagnostic services for accurate care.",
  },
  {
    icon: "🚑",
    title: "Emergency Care",
    text: "Immediate medical attention available around the clock.",
  },
  {
    icon: "💊",
    title: "Pharmacy",
    text: "Convenient access to essential medicines and healthcare products.",
  },
  {
    icon: "🏥",
    title: "Inpatient Care",
    text: "Comfortable hospital care supported by experienced medical staff.",
  },
  {
    icon: "⚕️",
    title: "Specialist Care",
    text: "Access to experienced specialists across multiple departments.",
  },
];

function Services() {
  return (
    <section className="services-section">

      <div className="section-heading">

        <span className="section-label">
          OUR SERVICES
        </span>

        <h2>
          Complete Healthcare
          <br />
          <strong>Under One Roof</strong>
        </h2>

        <p>
          Comprehensive medical services designed around
          the needs of our patients.
        </p>

      </div>

      <div className="services-grid">

        {services.map((service) => (
          <article
            className="service-card"
            key={service.title}
          >

            <div className="service-icon">
              {service.icon}
            </div>

            <h3>
              {service.title}
            </h3>

            <p>
              {service.text}
            </p>

            <Link
              to="/doctors"
              className="service-link"
            >
              Learn More →
            </Link>

          </article>
        ))}

      </div>

    </section>
  );
}

export default Services;