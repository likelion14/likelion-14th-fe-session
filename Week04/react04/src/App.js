import './App.css';

function App() {
  const morning = '아침';
  const afternoon = '점심';
  const evening = '저녁';
  const todo = ['멋사 과제하기', 'React 공부하기', '교양 과제하기'];
  const cheer = () => {
    alert(`오늘 하루도 파이팅!`);
  };

  return (
    <div>
      <h1 style={{ color: '#8bb4ff', textAlign: 'center', margin: '50px auto' }}>📅 나의 하루 루틴</h1>
      <div style={{ 
        padding: '50px',
        fontFamily: 'Pretendard, sans-serif',
        backgroundColor: '#f7f9fc',
        borderRadius: '12px',
        maxWidth: '600px',
        margin: '30px auto',
        boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
      }}>
        <h2>{morning} | 09:00</h2>
        <p style={{ fontWeight: 'bold' }}>기상</p>
        <p style={{ color: 'gray' }}>하루를 시작할 준비!</p>
      </div>
      <div style={{ 
        padding: '50px',
        fontFamily: 'Pretendard, sans-serif',
        backgroundColor: '#f7f9fc',
        borderRadius: '12px',
        maxWidth: '600px',
        margin: '30px auto',
        boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
      }}>
        <h2>{afternoon} | 12:30</h2>
        <p style={{ fontWeight: 'bold' }}>점심 식사</p>
        <p style={{ color: 'gray' }}>맛있는 점심 먹고 힘내기!</p>
        {afternoon === '점심' ? (
          <p style={{ color: 'rgb(226, 211, 0)' }}>⭐ 점심 꼭 챙겨 먹기!</p>
        ) : (
          <p style={{ color: '#cc0000'}}>‼️ 점심인지 확인하기</p>
        )}
      </div>
      <div style={{ 
        padding: '50px',
        fontFamily: 'Pretendard, sans-serif',
        backgroundColor: '#f7f9fc',
        borderRadius: '12px',
        maxWidth: '600px',
        margin: '30px auto',
        boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
      }}>
        <h2>{evening} | 18:00</h2>
        <p style={{ fontWeight: 'bold' }}>저녁 식사</p>
        <p style={{ color: 'gray' }}>저녁 먹고 마지막까지 힘내기!</p>
      </div>
      <div style={{ 
        padding: '50px',
        fontFamily: 'Pretendard, sans-serif',
        backgroundColor: '#f7f9fc',
        borderRadius: '12px',
        maxWidth: '600px',
        margin: '30px auto',
        boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
      }}>
        <h2>{evening} | 19:00</h2>
        <p style={{ fontWeight: 'bold' }}>Todo 끝내기</p>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {todo.map((todo, i) => (
            <li key={i} style={{
              padding: '8px 16px',
              margin: '10px auto',
              backgroundColor: '#fff',
              borderRadius: '20px',
              boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
              width: 'fit-content'
            }}>{todo}</li>
          ))}
        </ul>
      </div>
      <div style={{ textAlign: 'center' }}>
        <button onClick={cheer} style={{  
          marginTop: '10px',
          marginBottom: '50px',
          padding: '12px 24px',
          backgroundColor: '#4a90e2',
          color: '#fff',
          borderRadius: '25px',
          border: 'none',
          cursor: 'pointer',
          fontSize: '16px',
          boxShadow: '0 4px 8px rgba(74,144,226,0.3)',
        }}>오늘 루틴 응원하기 💪</button>
      </div>
    </div>
  );
}

export default App;
