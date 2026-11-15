function DoctorFilters({
  department,
  departments,
  onDepartmentChange,
}) {
  return (
    <div className="doctor-filters">

      <label htmlFor="doctor-department">
        Department
      </label>

      <select
        id="doctor-department"
        value={department}
        onChange={(event) =>
          onDepartmentChange(event.target.value)
        }
      >
        {departments.map((item) => (
          <option
            value={item}
            key={item}
          >
            {item}
          </option>
        ))}
      </select>

    </div>
  );
}

export default DoctorFilters;