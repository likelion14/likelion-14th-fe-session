import { useState } from 'react';
import { useNavigate, useLocation, Navigate, Outlet } from 'react-router-dom';

function Login({ onLogin }) {
 const [username, setUsername] = useState('');
 const [error, setError] = useState('');
 const navigate = useNavigate();
 const location = useLocation();
 const [isLoggedIn, setLoggedIn] = useState('false');

 const from = location.state?.from?.pathname || '/dashboard';

 const handleSubmit = (e) => {
   e.preventDefault();

   if (!username.trim() || isLoggedIn === false) {
     setError('🚫 유효한 이메일 주소나 휴대폰 번호를 입력하세요.');
     setLoggedIn(true);
     return;
   }

    onLogin();
    navigate('/home', { replace: true });
  };

 return (
   <div className="auth-container">
     <div className="card">
       <h2 className="text-login">로그인 정보를 입력하세요</h2>
       <label className="form-label" htmlFor="username">
          아니면 새 계정으로 시작하세요.
       </label>
      
       <form onSubmit={handleSubmit} className="auth-form">
         <div className="form-group">
           <input
             id="username"
             type="text"
             value={username}
             onChange={(e) => setUsername(e.target.value)}
             className={`form-control ${error ? 'input-error' : ''}`}
             placeholder="이메일 주소 또는 휴대폰 번호"
           />
         </div>
         
          {error && <p className="error-message">{error}</p>}
        
         <div className="form-group">
           <button
             type="submit"
             className="btnNext"
           >
             다음
           </button>
         </div>
       </form>
       <div style={{ marginTop: '60px',
        fontSize: '14px',
        color: 'white'
       }}>
        <p style={{ fontSize: '16px', color: 'white' }}>고객 지원</p>
        <p className='form-label'>이 페이지는 Google reCAPTCHA의 보호를 받아 사용자가 로봇이 아님을 확인합니다.</p>
       </div>
     </div>
   </div>
 );
}

export default Login;
