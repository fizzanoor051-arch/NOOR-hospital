import { useState } from "react";

function PharmacySearch({ onSearch }) {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    const newValue = event.target.value;

    setValue(newValue);

    if (onSearch) {
      onSearch(newValue);
    }
  };

  return (
    <div className="pharmacy-search">

      <span>
        🔎
      </span>

      <input
        type="search"
        value={value}
        onChange={handleChange}
        placeholder="Search medicines..."
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

export default PharmacySearch;