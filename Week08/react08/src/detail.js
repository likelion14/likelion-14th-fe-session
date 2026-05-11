import React, {useContext} from "react";
import { Link, useLocation } from "react-router-dom";
import { Context } from "./context";

function Detail({ date, mood, content }) {
  const { data } = useContext(Context);

  const location = useLocation();
  const ID = location.state.idData;

  const diaryData = data.find((e) => e.ID === ID)
  if (!diaryData) {
    return <div>데이터를 불러오는 중입니다...</div>;
  }

  return (
    <div>
      <h3>기록 상세</h3>
      <p>날짜: {diaryData.Date}</p>
      <p>기분: {diaryData.Mood}</p>
      <p>내용: {diaryData.Content}</p>
      <Link to="/history"><button>목록으로</button></Link>
    </div>
  );
}

export default Detail;