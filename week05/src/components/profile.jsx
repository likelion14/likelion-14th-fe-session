import React, { useState, useEffect } from "react";

// 기분 상태 표시하는 컨테이너 컴포넌트 (컴포넌트 추출법 활용)
function MoodContainer({ /*img,*/ todayMood, toggleMood }) {
    return (
        <div className="moodContainer" style={styles.moodContainer}>
            {/*<ImageContainer img={img} />*/}
            <ProfileMood mood={todayMood} />
            <h3>오늘의 기분 : {todayMood}</h3>
            <button onClick={toggleMood}>기분 바꾸기</button>
        </div>
    )
}

// 이미지 출력 컴포넌트 (컴포넌트 추출법 활용)
// function ImageContainer({ img }) {
//     return (
//         <div className="imgContainer" style={styles.imgContainer}>
//             <img style={styles.image} src={img} alt="프로필 이미지" />
//         </div>
//     )
// }

// 이미지 출력 컴포넌트 디벨롭 -> 무드에 따라 바뀌는 프로필 이미지
function ProfileMood({ mood }) {
    const sadProfile = "https://i.pinimg.com/736x/83/6a/77/836a771ec55628d866c449d91f61a437.jpg";
    const happyProfile = "https://i.pinimg.com/1200x/80/4b/d7/804bd7d1d024ac3a80b6e713c48d3fdb.jpg";

    return (
        <div className="imgContainer" style={styles.imgContainer}>
            <img
                style={styles.image}
                src={mood === "행복해" ? happyProfile : sadProfile}
                alt="프로필이미지" />
        </div>
    )
}

function Profile({/*img,*/ mood }) {
    const [todayMood, setTodayMood] = useState(mood);

    const toggleMood = () => {
        setTodayMood((prev) => (prev === "행복해" ? "슬퍼" : "행복해"));
    };

    useEffect(() => {
        console.log("오늘의 나의 기분을 좋을 거야! 행복하자 😁");
    }, [])


    return (
        <div>
            <h2 style={styles.mainTitle}>내 프로필</h2>
            <MoodContainer todayMood={todayMood} toggleMood={toggleMood} />
            {/* <div className="moodContainer" style={styles.moodContainer}>
                {/* <div className="imgContainer" style={styles.imgContainer}>
                    <img style={styles.image} src={img} alt="프로필 이미지" />
                </div> }
            <ImageContainer img={img} />
            <h3>오늘의 기분 : {todayMood}</h3>
            <button onClick={toggleMood}>기분 바꾸기</button>
        </div> */}
        </div >
    );
}

const styles = {
    mainTitle: {
        textAlign: "center",
        padding: "24px"
    },
    moodContainer: {
        height: "250px",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        borderRadius: "20px",
        border: "1px solid #888",
        margin: " 20px auto",
        maxWidth: "500px",
        padding: "24px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.08)"
    },
    imgContainer: {
        width: "130px",
        height: "130px",
        borderRadius: "50%",
        overflow: "hidden",
        display: "flex",
    },
    image: {
        width: "100%",
        height: "100%",
        objectFit: "cover"
    }
}

export default Profile;