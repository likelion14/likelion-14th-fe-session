import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import './App.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Home from './pages/Home';


function App() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=ko-kr`;

    console.log('API Key: ', API_KEY);
    console.log('요청 URL: ', url);

    fetch(url)
      .then((response) => {
        if (!response.ok) throw new Error("응답 실패!");
        return response.json();
      })
      .then((data) => {
        console.log("전체 응답:", data);
        console.log("첫번 째 영화:", data.results[0]);
        setMovies(data.results.slice(0, 20));
      })
      .catch((err) => {
        console.error("에러:", err);
        setError("영화 데이터를 불러오지 못했습니다.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className = "App">
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router> 
    </div>
  );
}

export default App;