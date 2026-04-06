import './App.css';

function App() {
  // button click 시 실행할 함수
  const cheer = () => {
    window.alert("루틴을 응원해주셔서 감사합니다.");
  };

  // button hover시 동작할 함수 정의 (추가 구현)
  const scaling = (e) => {
    e.target.style.transition = 'transform 0.2s ease';
    e.target.style.transform = 'scale(1.02)';
  };
  // button에서 마우스아웃 일 때 동작할 함수 정의 (추가 구현)
  const resetScale = (e) => {
    e.target.style.transform = 'scale(1)';
  }


  const routineLists = [
    {
      id: 1,
      title: '아침 | 09:00',
      routineTitle: '🚌 등교하기',
      content: '아침에는 지하철과 버스를 타고 학교에 갑니다.'

    },
    {
      id: 2,
      title: '점심 | 13:00',
      routineTitle: '☕️ 커피 마시기',
      content: '점심에는 커피를 마시며 잠을 깨웁니다.'
    },
    {
      id: 3,
      title: '저녁 | 23:59',
      routineTitle: '📚 과제하기',
      content: '저녁에는 과제를 제출합니다.'
    }
  ]
  return (
    <div style={{
      textAlign: 'center',
      padding: '50px',
      margin: '20px auto',
      fontFamily: 'Pretendard, Noto Sans KR, roboto',
      maxWidth: '600px'
    }} >
      <div className='maintitle' style={{
        alignContent: 'center',
        textAlign: 'center',
        margin: '5px auto',
      }}>
        <h2>🗓️ 나의 하루 루틴</h2>
      </div>

      {/* map()으로 루틴 카드 반복 출력 */}
      {/* map()의 key 값은 고유한 값을 사용하여야 하기 때문에 id 을 key 에 전달하도록 함 */}
      {/* 
      배열.map((요소) => JSX)
      내부적으로는
      // 1번째
      routine = routineLists[0]
      // 2번째
      routine = routineLists[1]
      // 3번째
      routine = routineLists[2]
      */}
      {routineLists.map((routine) => (
        <div className='routinelist' key={routine.id} style={{
          textAlign: 'left',
          backgroundColor: '#edf2fb',
          borderRadius: '10px',
          padding: '36px 24px',
          boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
          margin: '10px auto',
          maxWidth: '600px',
        }}>
          <h3>{routine.title}</h3>
          <p style={{
            fontWeight: 'bold'
          }}>{routine.routineTitle}</p>
          <p style={{
            color: '#696969',
          }}>{routine.content}</p>
          {/* 조건부 렌더링(삼항 조건 연산자 사용) - 점심 루틴에만 ⭐️ 메시지 넣기 */}
          {routine.title === '점심 | 13:00' ? (
            <p style={{
              color: '#546ca3'
            }}>
              ⭐️ 카페인 수혈은 필수입니다.</p>
          ) : null}
        </div>
      ))}

      {/* 
      map() 을 사용하기 전의 구현
      <div className='morning' style={{
        margin: '10px',
        alignItems: 'left',
        backgroundColor: '#fdfcfc',
        borderRadius: '15px',
        maxWidth: '600px',
        padding: '36px 24px',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)'
      }}>
        <h3>아침</h3>
        <p>아침에는 학교에 갑니다.</p>
      </div>
      <div className='afternoon' style={{
        margin: '10px',
        alignItems: 'left',
        backgroundColor: '#fdfcfc',
        borderRadius: '15px',
        maxWidth: '600px',
        padding: '36px 24px',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)'
      }}>
        <h3>점심</h3>
        <p>점심 루틴</p>
        <p>점심 루틴 추가 내용</p>
      </div>
      <div className='evening' style={{
        margin: '10px',
        alignItems: 'left',
        backgroundColor: '#fdfcfc',
        borderRadius: '15px',
        maxWidth: '600px',
        padding: '36px 24px',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)'
      }}>
        <h3>저녁</h3>
        <p style={{fontWeight: '600'}}>할일</p>
        <p style={{color: '#626262'}}>할일</p>
      </div> */}
      <button
        onClick={cheer}
        onMouseOver={scaling}
        onMouseOut={resetScale}
        style={{
          width: 'fit-content',
          marginTop: '30px',
          padding: '12px 24px',
          backgroundColor: '#92b4db',
          color: '#fff',
          borderRadius: '25px',
          border: 'none',
          cursor: 'pointer',
          fontSize: '15px',
          boxShadow: '0 4px 8px #CCC'
        }}>
        오늘 루틴 응원하기 📣
      </button>
    </div >
  );
}

export default App;
