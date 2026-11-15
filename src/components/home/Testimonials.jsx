const testimonials = [
  {
    name: "Ayesha Khan",
    role: "Patient",
    text: "The doctors and staff were professional, caring and very helpful throughout my visit.",
  },
  {
    name: "Muhammad Usman",
    role: "Patient",
    text: "The hospital environment was clean and comfortable, and the medical team explained everything clearly.",
  },
  {
    name: "Sara Ahmed",
    role: "Patient",
    text: "I appreciated the friendly staff and the quick attention I received during my appointment.",
  },
];

function Testimonials() {
  return (
    <section className="testimonials-section">

      <div className="section-heading">

        <span className="section-label">
          PATIENT EXPERIENCES
        </span>

        <h2>
          Trusted Care,
          <br />
          <strong>Real Experiences</strong>
        </h2>

        <p>
          Our patients are at the heart of everything we do.
        </p>

      </div>

      <div className="testimonials-grid">

        {testimonials.map((testimonial) => (
          <article
            className="testimonial-card"
            key={testimonial.name}
          >

            <div className="testimonial-stars">
              ★★★★★
            </div>

            <p>
              “{testimonial.text}”
            </p>

            <div className="testimonial-author">

              <div className="testimonial-avatar">
                {testimonial.name.charAt(0)}
              </div>

              <div>
                <strong>
                  {testimonial.name}
                </strong>

                <span>
                  {testimonial.role}
                </span>
              </div>

            </div>

          </article>
        ))}

      </div>

    </section>
  );
}

export default Testimonials;