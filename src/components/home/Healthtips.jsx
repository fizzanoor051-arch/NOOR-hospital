const healthTips = [
  {
    icon: "💧",
    title: "Stay Hydrated",
    text: "Drink enough water throughout the day to support your overall health.",
  },
  {
    icon: "🥗",
    title: "Eat Healthy",
    text: "Choose balanced meals with vegetables, fruits and nutritious foods.",
  },
  {
    icon: "🏃",
    title: "Stay Active",
    text: "Regular physical activity can help maintain a healthy lifestyle.",
  },
  {
    icon: "😴",
    title: "Sleep Well",
    text: "Give your body enough quality sleep and time to recover.",
  },
];

function Healthtips() {
  return (
    <section className="healthtips-section">

      <div className="section-heading">

        <span className="section-label">
          HEALTH & WELLNESS
        </span>

        <h2>
          Simple Tips for
          <br />
          <strong>Better Health</strong>
        </h2>

        <p>
          Small healthy habits can make a meaningful
          difference in your everyday wellbeing.
        </p>

      </div>

      <div className="healthtips-grid">

        {healthTips.map((tip) => (
          <article
            className="healthtip-card"
            key={tip.title}
          >

            <span className="healthtip-icon">
              {tip.icon}
            </span>

            <h3>
              {tip.title}
            </h3>

            <p>
              {tip.text}
            </p>

          </article>
        ))}

      </div>

    </section>
  );
}

export default Healthtips;