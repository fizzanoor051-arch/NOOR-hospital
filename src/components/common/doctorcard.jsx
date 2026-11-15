import { Link } from "react-router-dom";

function DoctorCard({
  icon,
  specialty,
  name,
  qualification,
  id,
}) {
  return (
    <div className="doctor-preview">

      <div className="doctor-avatar">
        {icon}
      </div>

      <span>
        {specialty}
      </span>

      <h3>
        {name}
      </h3>

      <p>
        {qualification}
      </p>

      <Link to={id ? `/doctors/${id}` : "/doctors"}>
        View Profile →
      </Link>

    </div>
  );
}

export default DoctorCard;