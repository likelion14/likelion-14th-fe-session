import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (!email.trim()) {
      setError('이메일 주소를 입력해주세요.');
      return;
    }

    navigate('/login/check', { state: {email: email} });
  };

  return (
    <div className="netflix-bg">
      <div className="flex-grow-1 d-flex align-items-center">
        <div className="login-container">
          <h1 className="h3 fw-bold mb-2">로그인 정보를 입력하세요</h1>
          <p className="mb-4" style={{ color: '#b3b3b3' }}>아니면 새 계정으로 시작하세요.</p>
          {error && <div className="alert alert-danger p-2 mb-3">{error}</div>}
          <form onSubmit={handleSubmit}>
            <input type="email" className="form-control netflix-input mb-3" placeholder="이메일 주소 또는 휴대폰 번호" value={email} onChange={(e) => setEmail(e.target.value)} />
            <button type="submit" className="btn w-100 netflix-btn">다음</button>
          </form>
          <div className="mt-5" style={{ color: '#8c8c8c', fontSize: '13px' }}>
            <p className="mb-3">고객 지원 ⌵</p>
            <p>이 페이지는 Google reCAPTCHA의 보호를 받아 사용자가 로봇이 아님을 확인합니다.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;