function Facilities() {
  const facilities = [
    ["🏥", "Modern Hospital", "Advanced healthcare environment."],
    ["🫀", "ICU & Critical Care", "Continuous critical patient monitoring."],
    ["⚕️", "Operation Theatres", "Modern surgical facilities."],
    ["🩸", "Blood Bank", "Blood and component services."],
    ["🧪", "Diagnostic Lab", "Laboratory and diagnostic services."],
    ["💊", "24/7 Pharmacy", "Hospital medical store."],
  ];

  return (
    <section
      id="services"
      className="facilities-section"
    >

      <div className="section-heading">

        <span className="section-label">
          HOSPITAL FACILITIES
        </span>

        <h2>
          Everything You Need
          <br />
          <strong>Under One Roof</strong>
        </h2>

      </div>

      <div className="facilities-grid">

        {facilities.map(([icon, title, text]) => (
          <div
            className="facility-item"
            key={title}
          >

            <span>{icon}</span>

            <h3>{title}</h3>

            <p>{text}</p>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Facilities;