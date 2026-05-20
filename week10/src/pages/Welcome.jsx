import { useNavigate } from 'react-router-dom';

function Welcome() {
  const navigate = useNavigate();

  return (
    <main className="status-page">
      <h1>환영합니다</h1>
      <p>
        로그인에 성공했어요.
      </p>
      <button type="button" onClick={() => navigate('/')}>
        메인으로 돌아가기
      </button>
    </main>
  );
}

export default Welcome;
