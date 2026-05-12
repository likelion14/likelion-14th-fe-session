import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import { useLocation } from 'react-router-dom'

const LogIn = ({ onLoginSuccess }) => {
    const location = useLocation()
    const [email, setEmail] = useState(location.state?.email || '')  // 전달받은 값 초기값으로
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()
        const isValidUser = email === 'udamee1025@gmail.com' && password === 'password123'
        if (isValidUser) {
            onLoginSuccess()
            navigate('/welcome')  // 새 페이지로
        } else {
            alert('로그인 정보가 올바르지 않습니다.')
            setPassword('')
        }
    }

    return (
        <div className="login-container">
            <div className="login-logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original"></img>
            </div>

            <div className="login-box">
                <h1 className="login-title">로그인 정보를 입력하세요</h1>
                <p className="login-subtitle">아니면 새 계정으로 시작하세요.</p>

                <form onSubmit={handleLogin} className="login-form">
                    <input
                        type="email"
                        placeholder="이메일 주소 또는 휴대폰 번호"
                        className="login-input"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="비밀번호"
                        className="login-input"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button type="submit" className="login-button">
                        다음
                    </button>
                </form>

                <div className="login-footer">
                    <span className="support-link">고객 지원 ∨</span>
                    <p className="recaptcha-text">
                        이 페이지는 Google reCAPTCHA의 보호를 받아 사용자가 로봇이 아님을 확인합니다.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LogIn;