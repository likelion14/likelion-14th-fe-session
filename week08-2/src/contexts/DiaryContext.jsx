import React, { createContext, useState, useContext } from 'react';

const DiaryContext = createContext();

export const DiaryProvider = ({ children }) => {
  const [diaries, setDiaries] = useState([
    { id: 1, date: '2026. 4. 23.', mood: 'happy', content: '오늘은 8주차 수업 만드는 날' },
    { id: 2, date: '2026. 4. 23.', mood: 'neutral', content: '평범한 하루였지만 괜찮았어요' },
    { id: 3, date: '2026. 4. 23.', mood: 'sad', content: '조금 피곤했지만 잘 버텼어요' },
  ]);

  const addDiary = (mood, content) => {
    const newDiary = {
      id: Date.now(),
      date: new Date().toLocaleDateString(),
      mood,
      content,
    };
    setDiaries([newDiary, ...diaries]);
  };

  return (
    <DiaryContext.Provider value={{ diaries, addDiary }}>
      {children}
    </DiaryContext.Provider>
  );
};

export const useDiary = () => useContext(DiaryContext);