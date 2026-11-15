import { useState } from "react";

function NurseSearch({ onSearch }) {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    const newValue = event.target.value;

    setValue(newValue);

    if (onSearch) {
      onSearch(newValue);
    }
  };

  return (
    <div className="nurse-search">

      <span>
        🔎
      </span>

      <input
        type="search"
        value={value}
        onChange={handleChange}
        placeholder="Search nurse..."
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

export default NurseSearch;