import { createContext, useContext, useState, useEffect } from 'react';

const DiaryContext = createContext();

export function DiaryProvider({ children }) {
  const [entries, setEntries] = useState(() => {
    const saved = localStorage.getItem('diary-entries');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('diary-entries', JSON.stringify(entries));
  }, [entries]);

  const addEntry = (newRecord) => {
    setEntries(prev => [...prev, newRecord]);
  };

  return (
    <DiaryContext.Provider value={{ entries, addEntry }}>
      {children}
    </DiaryContext.Provider>
  );
}

export function useDiary() {
  return useContext(DiaryContext);
}