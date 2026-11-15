function DepartmentProfile({
  department,
}) {
  if (!department) {
    return null;
  }

  return (
    <section className="department-profile">

      <div className="department-profile-icon">
        {department.icon}
      </div>

      <div className="department-profile-content">

        <span className="section-label">
          MEDICAL DEPARTMENT
        </span>

        <h2>
          {department.name}
        </h2>

        <p>
          {department.description}
        </p>

        {department.services &&
          department.services.length > 0 && (
            <div className="department-profile-services">

              {department.services.map(
                (service) => (
                  <div
                    className="department-profile-service"
                    key={service}
                  >
                    <span>✓</span>

                    <p>
                      {service}
                    </p>
                  </div>
                )
              )}

            </div>
          )}

      </div>

    </section>
  );
}

export default DepartmentProfile;