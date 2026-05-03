import './App.css';

function App() {
  const routines = [
  { time: "아침 | 08:00", content: "학교 갈 준비를 합니다", ex:'힘든 하루의 시작했습니다' },
  { time: "점심 | 13:00", content: "수업 열심히 듣습니다", ex :'힘든 수업의 시작했습니다' },
  { time: "저녁 | 20:00", content: "일을합니다", ex: '힘듬의 최고조를 시작했습니다' }
];
  const cheer = () => {
    alert("오늘하루도 힘내세요!");
  }

  return (
    <div>
      <div style ={{textAlign : 'center'}}>
      <h1 >🕔 나의 하루 루틴 🕥</h1>
      </div>
      {routines.map((item,index) =>(
        <div key = {index} style= {{
          padding : '30px',
          fontFamily : 'Pretendard, sans-serif',
          margin: '10px',
          backgroundColor : '#f7f9fc',
          borderRadius: '10px',
          boxShadow : '0 8px 16px rgba(0,0,0,0.1)'
        }}>
          <h3>{item.time}</h3>
          <br></br>
          <p>{item.content}</p>
          <h6 style={{
            color: item.time === "점심 | 13:00" ? 'orange' : 'grey'
          }}>
  {item.ex}
</h6>
        
          </div>
      ))}

      <div style = {{
        display : 'flex',
        justifyContent : 'center'
      }}>
        <button onClick = {cheer} style = {{
          marginTop: '25px',
          padding: '12px 24px',
          backgroundColor : '#4a90e2',
          color: '#fff',
          borderRadius: '25px',
          border: 'none',
          cursor: 'pointer',
          fontSize: '15px',
          boxShadow : '0 4px 8px rgba(74,144,226,0.3)'
        }}>
          응원해주세요!
        </button>
      </div>
      
      
    </div>
  );
}

export default App;