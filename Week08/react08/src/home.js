import React, {useState, useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "./context";

function Home() {
  const [mood, setMood] = useState("");
  const [content, setContent] = useState("");

  const { setData } = useContext(Context);

  const Submit = () => {
    if (!mood || !content) {
      alert("기분과 일기를 모두 입력해주세요.")
      return;
    }
    setData((prev) => [
      ...prev,
      {
        ID: Date.now(),
        Date: new Date().toLocaleDateString(),
        Mood: mood,
        Content: content
      },
    ]);
    setMood("");
    setContent("");
    alert("성공적으로 기록되었습니다.")
  };

  return (
    <div>
      <h3>오늘의 기분을 기록해보세요</h3>
      <button onClick={() => setMood("happy")} style={{ boxShadow: mood=="happy" ? "inset 0 0 5px gray" : "" }}>😃</button>
      <button onClick={() => setMood("netural")} style={{ boxShadow: mood=="netural" ? "inset 0 0 5px gray" : "" }}>😐</button>
      <button onClick={() => setMood("sad")} style={{ boxShadow: mood=="sad" ? "inset 0 0 5px gray" : "" }}>😢</button>
      <br />
      <textarea name="content" cols="100" rows="4" placeholder="오늘 있었던 일을 간단히 써보세요." value={content} onChange={(e) => setContent(e.target.value)} style={{ marginTop: "5px" }} />
      <br />
      <button onClick={Submit}>기록하기</button>
    </div>
  );
}

export default Home;