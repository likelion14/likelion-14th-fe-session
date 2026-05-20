import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/login', { state: { email } });
  };

  return (
    <section className="hero-container">
      <div className="hero-copy">
        <h1>영화, 시리즈 등을 무제한으로</h1>
        <p>7,000원으로 시작하세요. 멤버십은 언제든지 해지 가능합니다.</p>
        <h3>시청할 준비가 되셨나요? 멤버십을 등록하거나 재시작하려면 이메일 주소를 입력하세요.</h3>
      </div>

      <div className="hero-signup">
        <input
          className="hero-email-input"
          type="email"
          placeholder="이메일 주소"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <button className="hero-submit-button" type="button" onClick={handleStart}>
          시작하기 &gt;
        </button>
      </div>
    </section>
  );
};

export default Hero;
