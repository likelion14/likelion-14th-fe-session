import React from 'react';

function App() {
  const routines = [
    { id: 1, type: "아침", time: "11:00", task: "일어나서 학교 갈 준비 하기", desc: "기분 좋게 시작!" },
    { id: 2, type: "점심", time: "15:00", task: "수업 끝!", desc: "빠르게 집에 가기!" },
    { id: 3, type: "저녁", time: "20:00", task: "리액트 공부", desc: "멋사 과제 끝내기!" }
  ];

  return (
    <div style={{ padding: '50px', textAlign: 'center', backgroundColor: '#f7f9fc' }}>
      <h1>나의 하루 루틴 🦁</h1>

      {routines.map((item) => (
        <div key={item.id} style={{ 
          backgroundColor: 'white',
          borderRadius: '12px',
          padding: '20px',
          margin: '20px auto',
          maxWidth: '500px',
          boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
          textAlign: 'left'
        }}>
          <h2 style={{ fontSize: '18px', color: '#333' }}>{item.type} | {item.time}</h2>
          <h3 style={{ margin: '10px 0', color: '#FF8C00' }}>{item.task}</h3> 
          <p style={{ color: '#666' }}>{item.desc}</p>

          {/* 한글 "점심"과 똑같은지 비교하는 방식 */}
          {item.type === "점심" && (
            <p style={{ color: "orange" }}>⭐ 점심은 꼭 챙겨 먹어요!</p>
          )}
        </div>
      ))}


      <button 
        onClick={() => alert("오늘 하루 루틴 모두 확인 완료! 화아팅!")}
        style={{
          marginTop: '30px',
          padding: '12px 24px',
          backgroundColor: '#4a90e2',
          color: 'white',
          border: 'none',
          borderRadius: '25px',
          cursor: 'pointer',
          fontSize: '16px',
          boxShadow: '0 4px 8px rgba(74, 144, 226, 0.3)'
        }}
      >
        응원하기! 🎉
      </button>
    </div>
  );
}

export default App;