import React, { useState, useEffect, useMemo } from "react";

function moodScore(num) {
    let result = 0;
    for (let i = 0; i < 10; i++) {
        result += num;
    }

    return result;
}

function ProfileInput({ label, value, onChange, placeholder }) {
    return (
        <p>{label}:
            <input
                type="text"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                style={{
                    margin: "0px 0px 0px 4px"
                }}
            />
        </p>
    )
}

function MoodBoard({myName, todayMessage, result}) {
    return (
        <div style={{
            textAlign: "center",
            margin: "20px",
            padding: "20px",
            borderStyle: "dashed",
            borderWidth: "2px",
            borderRadius: "16px",
            borderColor: "rgba(0,0,0,0.5)"
        }}>
            <h3>{myName}의 한마디</h3>
            <p>{todayMessage}</p>
            <h3>오늘의 감정 점수</h3>
            <p>{result} 점</p>
        </div>
    );
}

function Profile({ img, mood, message, name }) {
    const [todayMood, setTodayMood] = useState(mood);
    const [todayMessage, setTodayMessage] = useState(message);
    const [myName, setMyName] = useState(name);
    const [number, setNumber] = useState(1);

    const toggleMood = () => {
        setTodayMood((prev) => (prev === "행복해" ? "슬퍼" : "행복해"));
    };

    const handleMessageChange = (e) => {
        setTodayMessage(e.target.value);
    }

    const handleNameChange = (e) => {
        setMyName(e.target.value);
    }

    const result = useMemo(() => moodScore(number), [number]);

    useEffect(() => {
            console.log("오늘의 나의 기분은 좋을 거야! 행복하자 😺");
    }, []);

    return(
        <div style = {{
            display: "flex",
            justifyContent: 'center',
            height: "80vh"
        }}>
            <div style = {{
                textAlign: "center"
            }}>
                <h2>{myName}의 기분 프로필</h2>
                <div style = {{
                    minWidth: "240px",
                    borderStyle: "solid",
                    borderColor: "rgba(0,0,0,0.3)",
                    borderRadius: "20px",
                    boxShadow: "0px 0px 12px rgba(0,0,0,0.3)",
                    padding: "40px",
                    textAlign: "center",
                    backgroundColor: "white",
            }}>
                    <img src={img} alt="profile"
                    style={{ borderRadius: "100px",
                        height: "100px",
                        width: "100px"
                    }}/>
                    <h3>{myName}의 기분: {todayMood}</h3>
                    <button onClick={toggleMood}>기분 바꾸기</button>
                </div>
                <MoodBoard
                    myName={myName}
                    todayMessage={todayMessage}
                    result={result}
                />
                <div style={{
                    textAlign: "center"
                    }}>
                        <ProfileInput 
                            label="이름" 
                            value={myName} 
                            onChange={handleNameChange}
                            placeholder="여기에 이름 입력" />
                        <ProfileInput 
                            label="한마디"
                            value={todayMessage} 
                            onChange={handleMessageChange} 
                            placeholder="여기에 메시지 입력" />
                        <p> 점수:
                            <input
                            type="number"
                            placeholder="여기에 0 ~ 10까지 점수 입력"
                            value={number}
                            onChange={(e) => setNumber(parseInt(e.target.value))}
                            style={{
                                margin: "0px 0px 0px 4px"
                            }} />
                        </p>
                </div>
            </div>
        </div>
    )
}

export default Profile;