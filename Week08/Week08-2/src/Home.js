import React, { useState } from "react";
import { useDiary } from './DiaryContext';

function Home() {
  const { addEntry } = useDiary();
  const emotion = ['happy', 'neutral', 'sad'];
  const [selectedEmotion, setSelectedEmotion] = useState(null);
  const [content, setContent] = useState("");

  const handleEmotionClick = (emotionID) => {
    setSelectedEmotion(prev => prev === emotionID ? null : emotionID);
  };

  const handleSubmit = () => {
    if (!selectedEmotion) {
      alert("감정을 선택해주세요");
      return;
    }
    const newRecord = {
      id: Date.now(),
      date: new Date().toLocaleDateString("ko-KR"),
      emotion: selectedEmotion,
      content: content
    };
    addEntry(newRecord);
    setSelectedEmotion(null);
    setContent("");
    alert("목록에 저장되었습니다.");
  };

  return (
    <div>
      <h2 style={{ marginBottom: 16 }}>오늘의 기분을 기록해보세요</h2>
      <button onClick={() => handleEmotionClick(emotion[0])}
        style={{ padding: 4, backgroundColor: selectedEmotion === emotion[0] ? "gray" : "" }}>😄</button>
      <button onClick={() => handleEmotionClick(emotion[1])}
        style={{ padding: 4, backgroundColor: selectedEmotion === emotion[1] ? "gray" : "" }}>😐</button>
      <button onClick={() => handleEmotionClick(emotion[2])}
        style={{ padding: 4, backgroundColor: selectedEmotion === emotion[2] ? "gray" : "" }}>😢</button>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <input type="text" value={content}
          placeholder="오늘 있었던 일을 간단히 기록해보세요"
          onChange={(e) => setContent(e.target.value)}
          style={{ paddingBottom: 40, paddingRight: 40, margin: "8px 0" }} />
      </div>
      <button onClick={handleSubmit}>기록하기</button>
    </div>
  );
}

export default Home;