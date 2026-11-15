import { useState } from "react";

function SearchBar({
  placeholder = "Search...",
  onSearch,
}) {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    const newValue = event.target.value;

    setValue(newValue);

    if (onSearch) {
      onSearch(newValue);
    }
  };

  return (
    <div className="search-bar">

      <span>
        🔎
      </span>

      <input
        type="search"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
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
          ×
        </button>
      )}

    </div>
  );
}

export default SearchBar;