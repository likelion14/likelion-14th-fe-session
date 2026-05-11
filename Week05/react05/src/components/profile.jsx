import React, {useState, useEffect} from "react";
import Image from "./profile_img.jpg";
import Button from "./button";
import Card from "./card";

function Profile({ img, mood }) {
  const [todayMood, setTodayMood] = useState(mood);

  const toggleMood = () => {
    setTodayMood((prev) => (prev === "행복해" ? "슬퍼" : "행복해"));
  };

  useEffect(() => {
    console.log("오늘의 나의 기분은 좋을 거야! 행복하자 😊");
  }, []);

  return (
    <div>
      <div style={{ 
        textAlign: "center", 
        border: "1px solid gray",
        borderRadius: "10px",
        width: "400px", 
        margin: "auto",
        padding: "30px 0px"
      }}>
        <img src={Image} style={{width: "70px", borderRadius: "50px"}} />
        <h3>오늘의 기분: {todayMood}</h3>
        <Button text="기분 바꾸기" onClick={toggleMood} bgColor="#ff6464" />
        <br />
        <Button text="오늘 하루 확인하기" onClick={() => console.log("오늘 하루는?")} bgColor="#6488ff" />
      </div>
      <div style={{
        textAlign: "center",
        width: "400px",
        margin: "auto",
        display: "flex",
        flexWrap: "wrap",
        marginTop: "2px"
      }}>
        <Card emoji="♈ " title="양자리" />
        <Card emoji="♉ " title="황소자리" />
        <Card emoji="♊ " title="쌍둥이자리" />
        <Card emoji="♋ " title="게자리" />
        <Card emoji="♌ " title="사자자리" />
        <Card emoji="♍ " title="처녀자리" />
        <Card emoji="♎ " title="천칭자리" />
        <Card emoji="♏ " title="전갈자리"  />
        <Card emoji="♐ " title="사수자리" />
        <Card emoji="♑ " title="염소자리" />
        <Card emoji="♒ " title="물병자리" />
        <Card emoji="♓ " title="물고기자리" />
      </div>
    </div>
  )
}

export default Profile;