import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDiary } from './DiaryContext';

function Detail() {
  const { entries } = useDiary();
  const { id } = useParams();
  const navigate = useNavigate();

  const entry = entries.find((e) => e.id === Number(id));

  return (
    <div>
      <h2>기록 상세</h2>
      <p>날짜: {entry.date}</p>
      <p>기분: {entry.emotion}</p>
      <p>내용: {entry.content}</p>
      <button onClick={() => navigate("/history")}>목록으로</button>
    </div>
  );
}

export default Detail;