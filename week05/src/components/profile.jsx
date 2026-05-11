import React, { useState, useEffect } from "react";

function Profile({ image, mood }) {
  const [todayMood, setTodayMood] = useState(mood);

  const toggleMood = () => {
    setTodayMood((prev) => (prev === "행복해" ? "슬퍼" : "행복해"));
  };

  if (todayMood === "슬퍼") {
    console.log("기분이 슬퍼졌네. 힘내자! ");
  } 
  else {
    console.log("오늘의 나의 기분은 좋을 거야! 행복하자");
  }

  return (
    <div style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '10px', textAlign: 'center', width: '300px' }}>
      <h2>내 프로필</h2>
      
      <img 
        src={image} 
        alt="프로필" 
        style={{ width: '100px', height: '100px', borderRadius: '50%' }} 
      />
      
      <h3>오늘의 기분: {todayMood}</h3>
      
      <button onClick={toggleMood}>기분 바꾸기</button>
    </div>
  );
}

export default Profile;