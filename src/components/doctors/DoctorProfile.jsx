function DoctorProfile({ doctor }) {
  if (!doctor) {
    return null;
  }

  return (
    <section className="doctor-profile">

      <div className="doctor-profile-avatar">
        {doctor.icon}
      </div>

      <div className="doctor-profile-info">

        <span>
          {doctor.specialty}
        </span>

        <h2>
          {doctor.name}
        </h2>

        <h4>
          {doctor.qualification}
        </h4>

        <p>
          {doctor.experience}
        </p>

        <p className="doctor-about">
          {doctor.about}
        </p>

      </div>

    </section>
  );
}

export default DoctorProfile;