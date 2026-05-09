import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { JournalContext } from "./JournalContext";

function JournalDetail() {
    // URL의 :id 파라미터 추출 (문자열로 옴)
    const { id } = useParams();

    // Context에서 journals 꺼내오기
    // journals에는 id, mood, text, date 를 담은 객체를 담은 배열을 저장함
    const { journals } = useContext(JournalContext);

    // id로 배열에서 해당 일기 찾기 (id는 문자열이므로 Number()로 변환)
    const entry = journals.find((j) => j.id === Number(id));

    return (
        <div style={{ padding: '12px' }}>
            <h2>기록 상세</h2>
            <p>날짜: {entry.date}</p>
            <p>기분: {entry.mood}</p>
            <p>일기: {entry.text}</p>
            <Link to="/list">
                <button>목록으로</button>
            </Link>
        </div>
    );
}

export default JournalDetail;