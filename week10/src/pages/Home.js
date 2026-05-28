import React, { useEffect, useState } from 'react';
import Banner from '../components/Banner';
import Contents from '../components/Contents';

const Home = () => {
  const [data, setData] = useState({
    popularMovies: [],
    funnyMovies: [],
    originalMovies: [],
    liveMovies: [],
    talkMovies: [],
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

  const fetchData = async (key, url, count) => {
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`Failed to fetch: ${res.status}`);
      const json = await res.json();
      setData((prev) => ({
        ...prev,
        [key]: json.results.slice(0, count),
      }));
    } catch (error) {
        setError((prevError) => `${prevError ? prevError + '\n' : ''}${key}: ${error.message}`);
    }
  };

  useEffect(() => {
    const fetchAllData = async () => {
      setLoading(true);
      setError(null);

      await Promise.all([
        fetchData('popularMovies', `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=ko-kr`, 15),
        fetchData('funnyMovies', `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=ko-kr`, 15),
        fetchData('originalMovies', `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=ko-kr`, 10),
        fetchData('liveMovies', `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=ko-kr`, 10),
        fetchData('talkMovies', `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=ko-kr`, 10),
      ]);

      setLoading(false);
    };

    fetchAllData();
  }, [API_KEY]);

  if (loading) return <div style={{ color: 'white', textAlign: 'center' }}>로딩 중...</div>;

  if (error) return <div style={{ color: 'red', textAlign: 'center', whiteSpace: 'pre-line' }}>{`에러 발생:\n${error}`}</div>;

  return (
    <div>
      <Banner />
      <Contents title="실시간 인기 시리즈" items={data.popularMovies} />
      <Contents title="웃고 싶을 때 추천 영화" items={data.funnyMovies} />
      <Contents title="티빙 오리지널" items={data.originalMovies} />
      <Contents title="지금 방영 중인 콘텐츠" items={data.liveMovies} />
      <Contents title="토크쇼 시리즈" items={data.talkMovies} />
    </div>
  );
};

export default Home;