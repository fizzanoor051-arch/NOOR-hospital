import { useState } from "react";

function DepartmentSearch({ onSearch }) {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    const newValue = event.target.value;

    setValue(newValue);

    if (onSearch) {
      onSearch(newValue);
    }
  };

  return (
    <div className="department-search">

      <span className="search-icon">
        🔎
      </span>

      <input
        type="search"
        value={value}
        onChange={handleChange}
        placeholder="Search department..."
      />

      {value && (
        <button
          type="button"
          onClick={() => {
            setValue("");

            if (onSearch) {
              onSearch("");
            }
          }}
        >
          ✕
        </button>
      )}

    </div>
  );
}

export default DepartmentSearch;