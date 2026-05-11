import React from "react";
import Button from "./button";

function Card ({ emoji, title }) {
  return (
    <div>
      <div style={{ 
        textAlign: "center", 
        border: "1px solid gray",
        borderRadius: "10px",
        width: "194px",
        margin: "2px 2px",
        padding: "10px 0px"
      }}>
        <h3>{emoji}{title}</h3>
        <Button text={`${title} 운세 확인하기`} onClick={() => console.log(`${title} 오늘의 운세는?`)} bgColor="#ffffff" />
      </div>
    </div>
  )
}

export default Card;