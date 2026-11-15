import { Link } from "react-router-dom";
import departmentsData from "../../data/departmentsData";

function DepartmentsPreview() {
  return (
    <section
      id="departments"
      className="departments-section"
    >

      <div className="section-heading">

        <span className="section-label">
          MEDICAL DEPARTMENTS
        </span>

        <h2>
          Expert Care for
          <br />
          <strong>Every Need</strong>
        </h2>

        <p>
          Our multidisciplinary departments provide
          specialized healthcare for patients of all ages.
        </p>

      </div>

      <div className="department-grid">

        {departmentsData
          .slice(0, 6)
          .map((department) => (
            <div
              className="department-box"
              key={department.id}
            >

              <span>
                {department.icon}
              </span>

              <h3>
                {department.name}
              </h3>

              <p>
                {department.description}
              </p>

              <Link to="/departments">
                View Department →
              </Link>

            </div>
          ))}

      </div>

    </section>
  );
}

export default DepartmentsPreview;