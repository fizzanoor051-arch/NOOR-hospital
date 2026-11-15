import { Link } from "react-router-dom";

function DepartmentCard({
  icon,
  title,
  text,
}) {
  return (
    <div className="department-box">

      <span>
        {icon}
      </span>

      <h3>
        {title}
      </h3>

      <p>
        {text}
      </p>

      <Link to="/doctors">
        View Specialists →
      </Link>

    </div>
  );
}

export default DepartmentCard;