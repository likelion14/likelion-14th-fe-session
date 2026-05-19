function Home({ email }) {
  return (
    <div>
      <h1>넷플릭스 홈 화면</h1>
      <p>성공적으로 로그인 되었습니다.</p>
      <p>{email}님, 환영합니다!</p>
    </div>
  )
}

export default Home;