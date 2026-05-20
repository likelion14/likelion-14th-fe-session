import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <main className="status-page">
      <h1>404</h1>
      <h2>페이지를 찾을 수 없습니다</h2>
      <p>입력한 주소가 잘못되었거나 페이지가 이동되었을 수 있습니다.</p>
      <Link to="/">홈으로 돌아가기</Link>
    </main>
  );
}

export default NotFound;
