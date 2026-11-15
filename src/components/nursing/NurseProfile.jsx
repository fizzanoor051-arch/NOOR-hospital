function NurseProfile({ nurse }) {
  if (!nurse) {
    return null;
  }

  return (
    <section className="nurse-profile">

      <div className="nurse-profile-avatar">
        {nurse.icon || "👩‍⚕️"}
      </div>

      <div className="nurse-profile-content">

        <span className="section-label">
          NURSING PROFESSIONAL
        </span>

        <h2>
          {nurse.name}
        </h2>

        <h4>
          {nurse.qualification}
        </h4>

        <p>
          {nurse.experience}
        </p>

        {nurse.about && (
          <p>
            {nurse.about}
          </p>
        )}

      </div>

    </section>
  );
}

export default NurseProfile;