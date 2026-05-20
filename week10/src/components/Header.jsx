import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="header">
      <button className="netflixlogo" type="button" onClick={() => navigate('/')}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt="Netflix"
        />
      </button>

      <div className="headerRightSide">
        <select className="languageSelect" aria-label="언어 선택">
          <option value="ko-KR">한국어</option>
          <option value="en-KR">English</option>
        </select>

        <button className="logInBtn" type="button" onClick={() => navigate('/login')}>
          로그인
        </button>
      </div>
    </header>
  );
};

export default Header;
