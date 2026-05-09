import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import React, { useState, useContext } from 'react';
import JournalList from './JournalList';
import JournalDetail from './JournalDetail';
import { JournalContext, JournalProvider } from './JournalContext';

function Home() {
  const [mood, setMood] = useState("");
  const [journal, setJournal] = useState("");

  // Context에서 addJournal 함수 꺼내오기
  const { addJournal } = useContext(JournalContext);

  const handleSave = () => {
    // 감정 버튼이나 입력된 일기 내용이 없다면 오류 메시지 출력하기
    if (!mood || !journal.trim()) {
      alert("기분과 일기를 모두 입력해주세요!");
      return;
    }

    // 새 일기 객체 생성
    const newJournal = {
      id: Date.now(),
      mood,
      text: journal,
      date: new Date().toLocaleDateString("ko-KR"),
    };

    addJournal(newJournal); // Context의 addJournal 호출 → 상태 업데이트 → localStorage 자동 저장
    setMood("");
    setJournal("");
    alert("저장되었습니다!");
  };

  return (
    <div className='main' style={styles.container}>
      <h2>오늘의 기분을 기록해보세요</h2>
      <div className='emotion-btn'>
        <button onClick={() => setMood("happy")}>😄</button>
        <button onClick={() => setMood("normal")}>😐</button>
        <button onClick={() => setMood("sad")}>😢</button>
      </div>
      <div className='journal'>
        <textarea
          value={journal}
          onChange={e => setJournal(e.target.value)}
          style={styles.journal}
          placeholder="오늘 있었던 일을 간단히 써보세요"
        />
      </div>
      <button onClick={handleSave}>기록하기</button>
      <br />
      <Link to="/list">
        <button style={{ marginTop: '3px' }}>목록으로</button>
      </Link>
    </div>
  );
}

function App() {
  return (
    <JournalProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/list' element={<JournalList />} />
          {/* :id는 동적 파라미터 — 어떤 일기인지 구분 */}
          <Route path='/detail/:id' element={<JournalDetail />} />
        </Routes>
      </BrowserRouter>
    </JournalProvider>
  );
}

const styles = {
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '12px'
  },
  journal: {
    width: '600px',
    height: '100px',
    margin: '5px 0px'
  }
}

export default App;