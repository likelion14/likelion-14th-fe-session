import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useState, useMemo, useEffect } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const MovieCard = React.memo(({ movie }) => {
  return (
    <div className="movie-card">
      <img 
        src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`} 
        alt={movie.title} 
        className="swiper-section-img"
      />
    </div>
  );
});

function SectionSlider({ title, movie }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=ko-KR`;

    console.log(API_KEY);
    console.log(url);
    fetch(url)
        .then(response => {
            if(!response.ok) throw new Error('Failed to fetch');
            return response.json();
        })
        .then(data => {
          const movieArray = (data.results || [])
          .filter(item => item.poster_path)
          .slice(0, 16);
          setMovies(movieArray);
          setLoading(false);
        })
        .catch(err => {
            setError(err.message);
            setLoading(false);
        })
  }, []);
  
  if (loading) return <div className="loader">로딩 중...</div>
  if (error) return <div className="error">에러: {error}</div>
  if (movies.length === 0) return null;
  
  return (
    <div className='section-swiper-container'>
      <div>
        <p className='section-title'>{title}</p>
      </div>
      <Swiper
        modules={[Navigation]}
        spaceBetween={16} // 이미지들 사이의 여백
        slidesPerView={5.5} // 화면에 한 번에 보일 슬라이드 개수
        slidesPerGroup={5} // 한 번에 넘길 슬라이드 개수
        navigation
        className="section-swiper"
      >
        {movies?.map((movieItem) => (
          <SwiperSlide key={movieItem.id}>
            <MovieCard movie={movieItem} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

function MultiSection( {movie} ) {
  
    return (
        <div className="multi-section-wrapper" style={{ padding: '8px 0;' }}>
            <SectionSlider 
                title="믿고 보는 웨이브 에디터 추천작"
            />
            <SectionSlider 
                title="실시간 인기 콘텐츠"
            />
            <SectionSlider 
                title="오직 웨이브에서"
            />
            <SectionSlider 
                title="새로 올라온 시리즈"
            />
            <SectionSlider 
                title="새로 올라온 영화"
            />
        </div>
    )
}

export default MultiSection;