function EmergencyCard({
  icon = "🚑",
  title = "Emergency Services",
  items = [
    "24/7 Emergency Room",
    "Ambulance Service",
    "Trauma Care",
    "Critical Care",
    "Emergency Pharmacy",
  ],
}) {
  return (
    <div className="emergency-card">

      <span className="emergency-big-icon">
        {icon}
      </span>

      <h3>
        {title}
      </h3>

      <ul>
        {items.map((item) => (
          <li key={item}>
            {item}
          </li>
        ))}
      </ul>

    </div>
  );
}

export default EmergencyCard;