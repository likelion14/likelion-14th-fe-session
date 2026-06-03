import { useState, useEffect, memo } from 'react';

export function Section({ text, type }) {
  const [movies, setMovies] = useState([]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
    const url = `https://api.themoviedb.org/3/${type}?api_key=${API_KEY}&language=ko-KR`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        setMovies(data.results.slice(0, 20));
      })
      .catch(err => console.error("Failed to fetch: ", err));
  }, []);

  const prev = () => {
    setCurrent((e) => (e === 0 ? 12 : e-6));
  };

  const next = () => {
    setCurrent((e) => (e === 12 ? 0 : e+6));
  };  

  return (
    <div style={{ padding: '0px 30px' }}>
      <h2 style={{ fontWeight: 'bold', color: '#d9d9d9' }}>{text}</h2>
      <div style={{ width: '100%', overflow: 'hidden', position: 'relative', padding: '10px 0px' }}>
        <div style={{ display: 'flex', gap: '10px',
          transform: `translateX(-${current * (200 + 10)}px)`,
          transition: 'transform 0.4s ease-in-out'
         }}>
          {movies.map((movie, index) => (
            <div key={`${movie.id}-${index}`} className="card-hover" style={{
              flexShrink: 0,
              height: '300px',
              width: '200px',
              backgroundImage: `url(https://image.tmdb.org/t/p/w185${movie.poster_path})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'transform 0.3s ease'
            }} />
          ))}
        </div>
        <button onClick={prev} style={{ position: 'absolute', top: '45%', cursor: 'pointer', backgroundColor: '#00000000', border: ' 0px solid #ffffff00', borderRadius: '50%', left: '5px', color: 'white' }}>〈</button>
        <button onClick={next} style={{ position: 'absolute', top: '45%', cursor: 'pointer', backgroundColor: '#00000000', border: ' 0px solid #ffffff00', borderRadius: '50%', right: '5px', color: 'white' }}>〉</button>
      </div>
    </div>
  )
}

export const MemoizedSection = memo(Section);