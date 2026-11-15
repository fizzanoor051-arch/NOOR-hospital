import { Link } from "react-router-dom";

function DoctorCard({
  id,
  name,
  specialty,
  qualification,
  experience,
  icon,
}) {
  return (
    <article className="doctor-card">

      <div className="doctor-avatar">
        {icon}
      </div>

      <span className="doctor-specialty">
        {specialty}
      </span>

      <h3>
        {name}
      </h3>

      <p>
        {qualification}
      </p>

      <small>
        {experience}
      </small>

      <Link
        to={`/doctors/${id}`}
        className="doctor-profile-link"
      >
        View Profile →
      </Link>

    </article>
  );
}

export default DoctorCard;