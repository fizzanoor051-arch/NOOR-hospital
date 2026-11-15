function QuickServices() {
  const services = [
    {
      icon: "🚑",
      title: "Emergency",
      text: "24/7 Emergency Care",
    },
    {
      icon: "👨‍⚕️",
      title: "Find a Doctor",
      text: "Qualified Specialists",
    },
    {
      icon: "📅",
      title: "Appointments",
      text: "Book Your Visit",
    },
    {
      icon: "💊",
      title: "Pharmacy",
      text: "Hospital Medical Store",
    },
  ];

  return (
    <section className="quick-services">

      {services.map((service) => (
        <div
          className="quick-service"
          key={service.title}
        >

          <span>
            {service.icon}
          </span>

          <div>
            <h3>
              {service.title}
            </h3>

            <p>
              {service.text}
            </p>
          </div>

        </div>
      ))}

    </section>
  );
}

export default QuickServices;