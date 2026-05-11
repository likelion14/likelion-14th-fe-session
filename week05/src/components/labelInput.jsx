import React from "react";

function LabeledInput({ label, value, onChange, placeholder }) {
  return (
    <div style={{ marginBottom: "15px", textAlign: "left" }}>
      <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>
        {label}
      </label>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        style={{
          width: "100%",
          padding: "8px",
          borderRadius: "4px",
          border: "1px solid #ccc",
          boxSizing: "border-box" 
        }}
      />
    </div>
  );
}

export default LabeledInput;