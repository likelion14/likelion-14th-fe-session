import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "./context";

function History() {
  const { data } = useContext(Context); 

  return (
    <div>
      <h3>기록한 감정 목록</h3>
      <ul>
        {data.map((index) => (
          <li key={index}>
            <Link to="/detail" state={{idData: index.ID}}>[{index.Date}] {index.Mood} - {index.Content}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default History;