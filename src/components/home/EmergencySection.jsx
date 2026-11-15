function EmergencySection() {
  return (
    <section
      id="emergency"
      className="emergency-section"
    >

      <div className="emergency-content">

        <span className="emergency-label">
          🚨 EMERGENCY DEPARTMENT
        </span>

        <h2>
          Medical Emergency?
          <br />
          <strong>We're Here 24/7.</strong>
        </h2>

        <p>
          Our emergency department provides immediate
          medical attention with trained doctors,
          nurses and emergency support staff.
        </p>

        <div className="emergency-actions">

          <a
            href="tel:1122"
            className="emergency-call"
          >
            📞 Call Emergency
          </a>

          <a
            href="#contact"
            className="emergency-info"
          >
            Emergency Information →
          </a>

        </div>

      </div>

      <div className="emergency-card">

        <span className="emergency-big-icon">
          🚑
        </span>

        <h3>
          Emergency Services
        </h3>

        <ul>
          <li>24/7 Emergency Room</li>
          <li>Ambulance Service</li>
          <li>Trauma Care</li>
          <li>Critical Care</li>
          <li>Emergency Pharmacy</li>
        </ul>

      </div>

    </section>
  );
}

export default EmergencySection;