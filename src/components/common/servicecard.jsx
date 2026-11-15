import { Link } from "react-router-dom";

function ServiceCard({
  icon,
  title,
  text,
}) {
  return (
    <div className="service-card">

      <span className="service-icon">
        {icon}
      </span>

      <h3>
        {title}
      </h3>

      <p>
        {text}
      </p>

      <Link to="/doctors">
        Learn More →
      </Link>

    </div>
  );
}

export default ServiceCard;