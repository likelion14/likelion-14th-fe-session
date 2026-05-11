import React from "react";
import { Link } from "react-router-dom";
import { useDiary } from './DiaryContext';

function History() {
  const { entries } = useDiary();

  return (
    <div>
      <h2>기록한 감정 목록</h2>
      <ul>
        {entries.map((entry) => (
          <li key={entry.id}>
            <Link to={`/detail/${entry.id}`}>
              [{entry.date}] {entry.emotion} - {entry.content}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default History;