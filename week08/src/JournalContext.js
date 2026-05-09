import React, { createContext, useState, useEffect } from "react";

// context 객체를 반환하는 createContext
export const JournalContext = createContext();

// {children} -> App.js에서 <JournalProvider> 내부의 모든 컴포넌트
export function JournalProvider({ children }) {
    const [journals, setJournals] = useState([]);

    // useEffect: 앱 시작 시 localStorage에서 데이터 불러오기
    useEffect(() => {
        const saved = localStorage.getItem("journals");
        if (saved) {
            setJournals(JSON.parse(saved));
        }
    }, []);

    // useEffect: journals 상태가 바뀔 때마다 localStorage에 저장
    // JSON.stringify([{id: 1, mood: "happy"}]) 객체 배열 -> 문자열로 저장
    // JSON.parse : 문자열 -> 객체/배열 (불러올 경우)
    useEffect(() => {
        localStorage.setItem("journals", JSON.stringify(journals));
    }, [journals]); // journals가 변경될 때마다 실행

    // 새 일기 추가 함수
    // newEntry -> 새로 작성한 일기 한 건을 담은 객체
    // 버튼을 누를 때마다 객체 하나가 만들어져서 journals 배열에 추가
    // prev = setJournals가 호출되는 시점의 현재 journals 배열
    // ... 스프레드 연산자를 이용하면 기존 일기 유지하고 새로운거 추가
    const addJournal = (newEntry) => {
        setJournals((prev) => [...prev, newEntry]);
    };

    return (
        // Provider로 감싸진 모든 자식 컴포넌트에서 journals, addJournal 사용 가능
        <JournalContext.Provider value={{ journals, addJournal }}>
            {children}
        </JournalContext.Provider>
    );
}