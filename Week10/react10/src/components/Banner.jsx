import { useState, useEffect, memo } from 'react';

export function Banner({ type }) {
  const [movies, setMovies] = useState([]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
    const url = `https://api.themoviedb.org/3/${type}?api_key=${API_KEY}&language=ko-KR`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        setMovies(data.results.slice(0, 5));
      })
      .catch(err => console.error("Failed to fetch: ", err));
  }, []);

  const prev = () => {
    setCurrent((e) => (e === 0 ? movies.length-1 : e-1));
  };

  const next = () => {
    setCurrent((e) => (e === 4 ? movies.length-5 : e+1));
  };

  return (
    <div style={{ paddingTop: '80px', display: 'flex', justifyContent:'center' }}>
      <div style={{ width: '95%', height: '70vh', borderRadius: '16px', overflow: 'hidden', position: 'relative' }}>
        <div style={{ display: 'flex', width: '100%', height: '100%',
          transform: `translateX(-${current * 100}%)`,
          transition: 'transform 0.4s ease-in-out'
        }}>
          {movies.map((movie, index) => (
            <div key={`${movie.id}-${index}`} style={{
              flexShrink: 0,
              width: '100%',
              height: '100%',
              backgroundImage: `url(https://image.tmdb.org/t/p/w780${movie.backdrop_path})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '16px',
              display: 'flex',
              justifyContent: 'flex-end',
              flexDirection: 'column',
            }}>
              <h1 style={{ color: 'white', margin: '0', fontWeight: 'bold', padding: '60px' }}>{movie.title || movie.name}</h1>
            </div>
          ))}
        </div>
        <button onClick={prev} style={{ position: 'absolute', top: '50%', cursor: 'pointer', backgroundColor: '#00000000', border: ' 0px solid #ffffff00', borderRadius: '50%', left: '25px', color: 'white' }}>〈</button>
        <button onClick={next} style={{ position: 'absolute', top: '50%', cursor: 'pointer', backgroundColor: '#00000000', border: ' 0px solid #ffffff00', borderRadius: '50%', right: '25px', color: 'white' }}>〉</button>
      </div>
    </div>
  )
}

export const MemoizedBanner = memo(Banner);