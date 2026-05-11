import './App.css';

function App() {

  const routineData = [
  { id: 1, daysplit: '아침', title: '찬물 세수', time: '10:00', detail: '제일 먼저 뇌를 깨워줍니다.' },
  { id: 2, daysplit: '점심', title: '점심 메뉴 찾기', time: '13:00', detail: '스크랩해둔 메뉴를 차근히 훑어봅니다.' },
  { id: 3, daysplit: '저녁', title: '코딩 공부', time: '20:00', detail: '느리지만 최선을 다해봅시다.' },
  ];

  const cheer = () => {
    alert('오늘 하루도 파이팅합시다! 👍')
  }

  return (
    <div style={{
      textAlign: 'center',
      margin: '40px auto',
      padding: '20px',
    }}>

      <h2 style={{
        color: 'blueviolet'
      }}>
        ✅ 나의 하루 루틴 ✅
      </h2>
      
      <div>
        {routineData.map((routine) =>
        <div key={routine.id} style = {{
          padding: '32px',
          fontFamily: 'Pretendard, sans-serif',
          backgroundColor: 'white',
          boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
          textAlign: 'left',
          borderRadius: '12px',
          margin: '20px auto',
          maxWidth: '800px'
        }}>
            <h2>
              {routine.daysplit} | {routine.time}
            </h2>
            <p>
              {routine.title}
            </p>
            <p style={{
              color: 'rgba(0, 0, 0, 0.5)'
            }}>
              {routine.detail}
            </p>
            {routine.daysplit === '점심' ? (
              <p style={{ color: 'orange' }}>
                🔥 중간에 흥미가 떨어지지 않도록 빠르게 정합시다.
              </p> ) : ( <p></p> 
              )}
        </div>
        )}
      </div>

      <button onClick={cheer} style={{
        marginTop: '20px',
        color: '#fff',
        backgroundColor: 'blueviolet',
        padding: '12px 24px',
        borderRadius: '12px',
        borderStyle: 'none',
        cursor: 'pointer',
        fontSize: '16px',
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)'
      }}>
        오늘의 루틴 응원하기 💞
      </button>

    </div>
  );
}

export default App;
