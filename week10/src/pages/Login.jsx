import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Login.css';

const Login = ({ onLoginSuccess }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [email, setEmail] = useState(location.state?.email || '');
  const [password, setPassword] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();

    const isValidUser =
      email === 'example@gmail.com' && password === 'password123';

    if (!isValidUser) {
      alert('로그인 정보가 올바르지 않습니다.');
      setPassword('');
      return;
    }

    onLoginSuccess();
    navigate('/welcome');
  };

  return (
    <div className="login-container">
      <div className="login-overlay" />
      <button className="login-logo" type="button" onClick={() => navigate('/')}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt="Netflix"
        />
      </button>

      <div className="login-box">
        <h1 className="login-title">로그인</h1>
        <p className="login-subtitle">example@gmail.com / password123 을 입력해보세요.</p>

        <form onSubmit={handleLogin} className="login-form">
          <input
            type="email"
            placeholder="이메일 주소 또는 휴대폰 번호"
            className="login-input"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
          <input
            type="password"
            placeholder="비밀번호"
            className="login-input"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
          <button type="submit" className="login-button">
            로그인
          </button>
        </form>

        <div className="login-support">
          <button type="button" onClick={() => navigate('/')}>
            새 계정으로 시작하기
          </button>
          <p>
            이 페이지는 Google reCAPTCHA의 보호를 받아 사용자가 로봇이 아님을
            확인합니다.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
