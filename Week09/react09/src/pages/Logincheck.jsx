import { useState } from 'react';
import { Navigate, useNavigate, useLocation } from 'react-router-dom';
import '../Netflix.css';

function LoginCheck({ onLogin }) {
  const [PIN, setPIN] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const { state } = useLocation();
  if (!state) {
    return <Navigate to="/login" replace />
  }
  const email = state.email;

  const handlePINSubmit = (e) => {
    e.preventDefault();

    if (!PIN.trim()) {
      setError('PIN 번호를 입력해주세요.');
      return;
    }

    if (PIN === '1234') {
      onLogin(email);
      navigate('/home', { replace: true })
    } else {
      setError('잘못된 PIN 번호입니다. (힌트: 1234)');
    }
  };

  return (
    <div className="netflix-bg">
      <div className="flex-grow-1 d-flex align-items-center">
        <div className="login-container">
          <h1 className="h3 fw-bold mb-4">이메일로 보내드린 코드를<br/>입력하세요</h1>
          <div className="email-display-box mb-4">
            <span style={{ color: '#fff' }}>{email}</span>
            <button type="button" onClick={() => navigate('/login')} style={{ background: 'none', border: 'none', color: '#b3b3b3', textDecoration: 'none', fontSize: '14px', cursor: 'pointer' }}>
              변경
            </button>
          </div>
          {error && <div className="alert alert-danger p-2 mb-3">{error}</div>}
          <form onSubmit={handlePINSubmit}>
            <input type="password" className="form-control netflix-input pin-input mb-3 text-center" placeholder="코드 입력" maxLength="4" value={PIN} onChange={(e) => setPIN(e.target.value)} />
            <p className="mb-4" style={{ color: '#b3b3b3', fontSize: '14px' }}>
              이 코드는 15분 후에 만료됩니다.<br/>코드를 못 받으셨나요? <span style={{ color: '#fff', textDecoration: 'underline', cursor: 'pointer' }}>코드 다시 받기.</span>
            </p>
            <button type="submit" className="btn w-100 netflix-btn">로그인</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginCheck;