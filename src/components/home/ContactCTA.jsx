function ContactCTA() {
  return (
    <section
      id="contact"
      className="contact-section"
    >

      <div>

        <span className="section-label">
          CONTACT US
        </span>

        <h2>
          We're Here
          <br />
          <strong>For You.</strong>
        </h2>

        <p>
          Contact our hospital for appointments,
          information and medical assistance.
        </p>

      </div>

      <div className="contact-details">

        <div>
          <span>📞</span>
          <div>
            <small>Emergency</small>
            <strong>1122</strong>
          </div>
        </div>

        <div>
          <span>📍</span>
          <div>
            <small>Hospital Address</small>
            <strong>Main Hospital Road, Pakistan</strong>
          </div>
        </div>

        <div>
          <span>🕐</span>
          <div>
            <small>Hospital Hours</small>
            <strong>Open 24 / 7</strong>
          </div>
        </div>

      </div>

    </section>
  );
}

export default ContactCTA;