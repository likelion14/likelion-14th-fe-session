import React, { useState } from "react";
import Profile from "./components/profile";
import MyButton from "./components/mybutton";
import LabeledInput from "./components/labelInput";
import myPhoto from "./profile.jpg";

function App() {
  const [userName, setUserName] = useState("예린");

  const handleAlert = () => {
    alert(`${userName}님, 반가워요!`);
  };

  return (
    <div style={{ padding: "50px" }}>
      <LabeledInput 
        label="이름 수정" 
        value={userName} 
        onChange={(e) => setUserName(e.target.value)} 
        placeholder="이름을 입력하세요"
      />

      <Profile image={myPhoto} mood="행복해" />

      <div style={{ marginTop: "20px" }}>
        <MyButton text="인사하기" onClick={handleAlert} />
        <MyButton text="취소" onClick={() => setUserName("")} color="#dc3545" />
      </div>
    </div>
  );
}

export default App;