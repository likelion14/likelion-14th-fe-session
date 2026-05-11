import React, { useState } from "react";
import DiaryForm from "./components/DiaryForm";
import DiaryList from "./components/DiaryList";
import DiaryDetail from "./components/DiaryDetail";

function App() {
  const [diaries, setDiaries] = useState([]);
  const [selectedDiary, setSelectedDiary] = useState(null);

  const onAdd = (text, mood) => {
    const newDiary = {
      id: Date.now(),
      date: new Date().toLocaleDateString(),
      mood,
      content: text,
    };
    setDiaries([newDiary, ...diaries]);
  };

  return (
    <div className="container">
      <h1>기분 일기장 SPA</h1>
      <div className="main-content" style={{ display: 'flex', gap: '20px' }}>
        <div className="left-side">
          <DiaryForm onCreate={onAdd} />
          <DiaryList diaries={diaries} onSelect={setSelectedDiary} />
        </div>
        <div className="right-side">
          <DiaryDetail diary={selectedDiary} />
        </div>
      </div>
    </div>
  );
}