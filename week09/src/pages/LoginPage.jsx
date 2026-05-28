import React, { useState, useEffect } from 'react'; 
import { useNavigate } from 'react-router-dom';

const footerStyle = {
  marginTop: '100px',
  padding: '30px 10%',
  backgroundColor: 'rgba(0, 0, 0, 0.75)',
  color: '#737373',
  fontSize: '14px',
};

const linkContainerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  maxWidth: '1000px',
  marginTop: '20px',
};

const ulStyle = {
  listStyle: 'none',
  padding: 0,
  minWidth: '150px',
  lineHeight: '2.5',
};

const selectStyle = {
  backgroundColor: '#000',
  color: '#737373',
  padding: '10px 15px',
  border: '1px solid #333',
  borderRadius: '2px',
  marginTop: '20px',
};

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <p>질문이 있으신가요? 문의 전화: 00-308-321-0161 (수신자 부담)(무료 전화)</p>
      <div style={linkContainerStyle}>
        <ul style={ulStyle}>
          <li>자주 묻는 질문</li>
          <li>쿠키 설정</li>
        </ul>
        <ul style={ulStyle}>
          <li>고객 센터</li>
          <li>기업 정보</li>
        </ul>
        <ul style={ulStyle}>
          <li>이용 약관</li>
        </ul>
        <ul style={ulStyle}>
          <li>개인정보 처리방침</li>
        </ul>
      </div>
      <select style={selectStyle}>
        <option>🌐 한국어</option>
        <option>English</option>
      </select>
    </footer>
  );
};

function LoginPage() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('userToken');
    if (token === 'loggedIn') {
      navigate('/home');
    }
  }, [navigate]);

  const handleNext = (e) => {
    e.preventDefault();
    if (!email.includes('@')) {
      setError('❌ 유효한 이메일 주소나 휴대폰 번호를 입력하세요.');
    } else {
      setError('');
      localStorage.setItem('userToken', 'loggedIn');
      navigate('/home');
    }
  };

  return (
    <div style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <div style={{ padding: '20px 4%' }}>
        <h1 style={{ color: '#E50914', fontSize: '35px', margin: 0, cursor: 'pointer' }}>NETFLIX</h1>
      </div>

      <div style={{ flex: 1, maxWidth: '450px', margin: '60px auto', width: '100%', padding: '0 20px' }}>
        <h2 style={{ fontSize: '32px', marginBottom: '10px' }}>로그인 정보를 입력하세요</h2>
        <p style={{ color: '#ccc', marginBottom: '30px' }}>아니면 새 계정으로 시작하세요.</p>

        <form onSubmit={handleNext}>
          <input
            type="text"
            placeholder="이메일 주소 또는 휴대폰 번호"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              width: '100%', padding: '15px', backgroundColor: '#333',
              border: error ? '1px solid orange' : '1px solid #8c8c8c',
              color: 'white', borderRadius: '4px', boxSizing: 'border-box', fontSize: '16px'
            }}
          />
          {error && <p style={{ color: 'orange', fontSize: '13px', marginTop: '5px' }}>{error}</p>}

          <button
            type="submit"
            style={{
              width: '100%', padding: '15px', backgroundColor: '#E50914',
              color: 'white', border: 'none', borderRadius: '4px',
              fontSize: '16px', fontWeight: 'bold', marginTop: '20px', cursor: 'pointer'
            }}
          >
            다음
          </button>
        </form>
        <p style={{ color: '#b3b3b3', marginTop: '20px', fontSize: '14px', cursor: 'pointer' }}>고객 지원 ∨</p>
      </div>

      <Footer />
    </div>
  );
}

export default LoginPage;