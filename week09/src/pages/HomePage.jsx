import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('userToken');

    if (!token) {
      alert('로그인이 필요한 페이지입니다.');
      navigate('/login');
    }
  }, [navigate]);

  return (
    <div style={{ color: 'white', textAlign: 'center', marginTop: '50px' }}>
      <h1 style={{ color: "#000" }}>🎬 넷플릭스 홈 화면에 오신 것을 환영합니다!
        
      </h1>
      <button onClick={() => {
        localStorage.removeItem('userToken'); // 로그아웃
        navigate('/login');
      }}>로그아웃</button>
    </div>
  );
}

export default HomePage;