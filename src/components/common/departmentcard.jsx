import { Link } from "react-router-dom";

function DepartmentCard({
  icon = "🏥",
  title = "Medical Department",
  text = "Specialized healthcare services.",
}) {
  return (
    <article className="department-box">

      <div className="department-icon">
        {icon}
      </div>

      <span className="department-label">
        MEDICAL DEPARTMENT
      </span>

      <h3>
        {title}
      </h3>

      <p>
        {text}
      </p>

      <Link
        to="/doctors"
        className="department-link"
      >
        View Specialists →
      </Link>

    </article>
  );
}

export default DepartmentCard;