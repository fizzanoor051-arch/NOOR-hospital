function NurseCard({
  name,
  qualification,
  experience,
  icon = "👩‍⚕️",
}) {
  return (
    <article className="nurse-card">

      <div className="nurse-avatar">
        {icon}
      </div>

      <span>
        Nursing Staff
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

    </article>
  );
}

export default NurseCard;