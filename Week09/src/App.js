import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate, Outlet, useLocation } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar';
import Home from './pages/Home.jsx';
import Login from './pages/Login';

const links = [
    '자주 묻는 질문', '고객 센터', '이용 약관', '개인정보 처리방침', 
    '쿠키 설정', '기업 정보',
  ];

function PrivateRoute({ isLoggedIn, children }) {
  return isLoggedIn ? children : <Navigate to="/login" replace />;
}

function PublicRoute({ isLoggedIn, children }) {
  return isLoggedIn ? <Navigate to="/home" replace /> : children;
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <BrowserRouter>
    <div className='background'>
      <div className='netflixGradient'>
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={
            <Navigate to={isLoggedIn ? "/home" : "/login"} replace />
          } />
        <Route path="/login" element={
            <PublicRoute isLoggedIn={isLoggedIn}>
              <div className='login_box'>
                <Login onLogin={() => setIsLoggedIn(true)} />
              </div>
            </PublicRoute>
          } />
        <Route path="/home" element={
            <PrivateRoute isLoggedIn={isLoggedIn}>
              <Home onLogout={() => setIsLoggedIn(false)} />
            </PrivateRoute>
          } />
      </Routes>
      <footer className="footer">
      <p className="footer-contact">
        질문이 있으신가요? 문의 전화: <a href="tel:00-308-321-0213">00-308-321-0213</a>(수신자 부담)(무료 전화)
      </p>
      <ul className="footer-links">
        {links.map((link) => (
          <li key={link}>
            <a href="#">{link}</a>
          </li>
        ))}
      </ul>
      <select className="language-box">
        <option>한국어</option>
      </select>
      <p className="footer-copy" style={{ whiteSpace: 'pre-wrap' }}>
        {`넷플릭스서비시스코리아 유한회사 통신판매업신고번호: 제2018-서울종로-0426호 전화번호: 00-308-321-0161 (수신자 부담)
대표: 레지널드 숀 톰슨
이메일 주소: korea@netflix.com
주소: 대한민국 서울특별시 종로구 우정국로 26, 센트로폴리스 A동 20층 우편번호 03161
사업자등록번호: 165-87-00119
클라우드 호스팅: Amazon Web Services Inc.
공정거래위원회 웹사이트`}
      </p>
    </footer>
    </div>
    </BrowserRouter>
  );
}

export default App;