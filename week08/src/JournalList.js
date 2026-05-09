import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { JournalContext } from "./JournalContext";

function JournalList() {
    // Context에서 journals 배열 꺼내오기
    const { journals } = useContext(JournalContext);

    return (
        <div style={styles.body}>
            <h2>기록한 감정 목록</h2>
            <ul>
                {journals.length === 0 ? (
                    <p>기록이 없습니다.</p>
                ) : (
                    // journals 배열을 순회하며 각 항목 렌더링
                    journals.map((entry) => (

                        <li key={entry.id}>
                            {/* /detail/:id 로 이동 — entry.id가 :id 자리에 들어감 */}
                            <Link to={`/detail/${entry.id}`}>
                                [{entry.date}] {entry.mood} - {entry.text}
                            </Link>
                        </li>
                    ))
                )}
            </ul>
            <Link to="/">
                <button>홈으로</button>
            </Link>
        </div>
    );
}

const styles = { body: { padding: '12px' } }

export default JournalList;