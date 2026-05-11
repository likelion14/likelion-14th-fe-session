import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDiary } from '../contexts/DiaryContext';

const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { diaries } = useDiary();

  const diary = diaries.find((d) => d.id === parseInt(id));

  if (!diary) return null;

  const cardStyle = {
    backgroundColor: '#ffffff',
    padding: '25px',
    borderRadius: '8px',
    boxShadow: '0 2px 5px #000000',
    border: '1px solid #eee'
  };

  return (
    <div style={cardStyle}>
      <h2 style={{ marginTop: 0, fontSize: '1.2rem', borderBottom: '1px solid #ffffff', paddingBottom: '10px' }}>
        기록 상세
      </h2>
      <div style={{ lineHeight: '2', marginBottom: '20px' }}>
        <p><strong>날짜:</strong> {diary.date}</p>
        <p><strong>기분:</strong> {diary.mood}</p>
        <p><strong>내용:</strong> {diary.content}</p>
      </div>
      <button 
        onClick={() => navigate('/')}
        style={{ padding: '5px 15px', cursor: 'pointer' }}
      >
        목록으로
      </button>
    </div>
  );
};

export default Detail;