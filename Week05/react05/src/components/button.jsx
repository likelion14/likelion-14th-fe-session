import React from "react";

function Button({ text, onClick, bgColor }) {
  return (
    <button onClick={onClick} style={{
      backgroundColor: bgColor,
      border: "0.1px solid gray",
      borderRadius: "10px",
      cursor: "pointer",
      padding: "3px 8px",
      marginBottom: "5px"
    }}>{text}</button>
  );
}

export default Button;