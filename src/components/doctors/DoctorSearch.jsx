import { useState } from "react";

function DoctorSearch({ onSearch }) {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    const newValue = event.target.value;

    setValue(newValue);

    if (onSearch) {
      onSearch(newValue);
    }
  };

  const clearSearch = () => {
    setValue("");

    if (onSearch) {
      onSearch("");
    }
  };

  return (
    <div className="doctor-search">

      <span>
        🔎
      </span>

      <input
        type="search"
        value={value}
        onChange={handleChange}
        placeholder="Search doctor..."
      />

      {value && (
        <button
          type="button"
          onClick={clearSearch}
        >
          ✕
        </button>
      )}

    </div>
  );
}

export default DoctorSearch;