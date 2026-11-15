import { Link } from "react-router-dom";

function ServiceCard({
  icon = "🩺",
  title = "Medical Service",
  text = "Professional healthcare service.",
}) {
  return (
    <article className="service-card">

      <div className="service-icon">
        {icon}
      </div>

      <h3>
        {title}
      </h3>

      <p>
        {text}
      </p>

      <Link
        to="/doctors"
        className="service-link"
      >
        Learn More →
      </Link>

    </article>
  );
}

export default ServiceCard;