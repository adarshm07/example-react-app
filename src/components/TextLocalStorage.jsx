import React, { useState } from "react";

function TextLocalStorage() {
  // State to hold the value from localStorage
  const [localValue, setLocalValue] = useState(
    localStorage.getItem("exampleKey") || ""
  );

  // Function to handle changes to the input field
  const handleChange = (event) => {
    setLocalValue(event.target.value);
    localStorage.setItem("exampleKey", event.target.value);
  };

  return (
    <div>
      <input type="text" value={localValue} onChange={handleChange} />
    </div>
  );
}

export default TextLocalStorage;
