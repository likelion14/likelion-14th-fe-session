import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDiary } from '../contexts/DiaryContext';

const Home = () => {
  const { diaries, addDiary } = useDiary();
  const [content, setContent] = useState('');
  const [mood, setMood] = useState('happy');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!content) return alert('내용을 입력하세요!');
    addDiary(mood, content);
    setContent('');
  };

  return (
    <div style={{ padding: '20px' }}>
      <section>
        <h3>오늘의 기분을 기록해보세요</h3>
        <form onSubmit={handleSubmit}>
          <select value={mood} onChange={(e) => setMood(e.target.value)}>
            <option value="happy">😆</option>
            <option value="neutral">😶</option>
            <option value="sad">😭</option>
          </select>
          <br />
          <textarea 
            value={content} 
            onChange={(e) => setContent(e.target.value)}
            placeholder="오늘 있었던 일을 간단히 써보세요"
            style={{ width: '100%', height: '60px', marginTop: '10px' }}
          />
          <button type="submit">기록하기</button>
        </form>
      </section>

      <section style={{ marginTop: '40px' }}>
        <h3>기록한 감정 목록</h3>
        <ul>
          {diaries.map((item) => (
            <li key={item.id} style={{ marginBottom: '10px' }}>
              <Link to={`/detail/${item.id}`}>
                [{item.date}] {item.mood} - {item.content}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Home;