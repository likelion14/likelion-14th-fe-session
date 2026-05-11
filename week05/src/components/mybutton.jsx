import React from "react";

function MyButton({ text, onClick, color = "#007bff" }) {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: color,
        color: "white",
        padding: "10px 20px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        margin: "5px",
        fontWeight: "bold"
      }}
    >
      {text}
    </button>
  );
}

export default MyButton;