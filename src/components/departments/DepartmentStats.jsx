function DepartmentStats() {
  const stats = [
    {
      number: "25+",
      label: "Medical Departments",
    },

    {
      number: "100+",
      label: "Qualified Doctors",
    },

    {
      number: "250+",
      label: "Nursing Staff",
    },

    {
      number: "24/7",
      label: "Emergency Support",
    },
  ];

  return (
    <section className="department-stats">

      {stats.map((stat) => (
        <div
          className="department-stat"
          key={stat.label}
        >

          <strong>
            {stat.number}
          </strong>

          <span>
            {stat.label}
          </span>

        </div>
      ))}

    </section>
  );
}

export default DepartmentStats;