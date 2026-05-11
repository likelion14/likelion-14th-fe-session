import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from "./Home";
import Detail from './Detail';
import History from "./History";
import { DiaryProvider } from './DiaryContext';

function App() {
  return (
    <DiaryProvider>
      <BrowserRouter>
        <div style={{ padding: 20 }}>
          <nav style={{ marginBottom: 16 }}>
            <Link to="/" style={{ marginRight: 10 }}>홈</Link>
            <Link to="/history" style={{ marginRight: 10 }}>기록한 감정 목록</Link>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/history" element={<History />} />
            <Route path="/detail/:id" element={<Detail />} />
          </Routes>
        </div>
      </BrowserRouter>
    </DiaryProvider>
  );
}

export default App;