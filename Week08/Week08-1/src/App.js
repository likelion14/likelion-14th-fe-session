import React from "react";
import Profile from "./components/profile.jsx"

function App() {
    return (
        <div>
            <Profile 
            img="https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/f8Qi/image/nB2ho0vRYaBFs2bJiVcwEINfbcU.jpg"
            mood="행복해"
            message="오늘의 한마디"
            name="나"/>
            <Profile 
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMAkbsQKjOLOQaBu0XviDMXq_1Q72Mq2aOOw&s"
            mood="슬퍼"
            message="바나나를 사랑해요"
            name="원숭이"/>
        </div>
    )
}

export default App;