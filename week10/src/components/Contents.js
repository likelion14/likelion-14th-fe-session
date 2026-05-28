import React, { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import './Contents.css';

const Contents = ({ title, items }) => {
  const sliderRef = useRef();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(null); // null로 초기화

  useEffect(() => {
    const updateSlidesToShow = () => {
      const width = window.innerWidth;
      if (width >= 1600) setSlidesToShow(7);
      else if (width >= 1200) setSlidesToShow(7);
      else if (width >= 900) setSlidesToShow(6);
      else if (width >= 600) setSlidesToShow(5);
      else setSlidesToShow(4);
    };

    updateSlidesToShow();
    window.addEventListener('resize', updateSlidesToShow);
    return () => window.removeEventListener('resize', updateSlidesToShow);
  }, []);

  if (slidesToShow === null) return null; 

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow,
    slidesToScroll: slidesToShow,
    arrows: false,
    beforeChange: (_, next) => setCurrentSlide(next),
  };


  return (
    <div className="content-section">
      <h2 className="section-title">{title}</h2>
  
      {currentSlide > 0 && (
        <button
          className="arrow prev-arrow"
          onClick={() => sliderRef.current.slickPrev()}>
          <svg width = "50" height = "50" viewBox = "0 0 24 24"
            fill = "none" stroke = "#ccc" strokeWidth = "1">
                <polyline points = "15 18 9 12 15 6" />
            </svg>
        </button>
      )}
  
      {(currentSlide + slidesToShow) < items.length && (
        <button
          className="arrow next-arrow"
          onClick={() => sliderRef.current.slickNext()}>
          <svg width = "50" height = "50" viewBox = "0 0 24 24"
            fill = "none" stroke = "#ccc" strokeWidth = "1">
                <polyline points = "9 6 15 12 9 18" />
            </svg>
        </button>
      )}
  
      {slidesToShow !== null && (
        <Slider ref={sliderRef} {...settings}>
          {items.map((item) => (
            <div key={item.id} className="content-item">
              <img
                src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                alt={item.title}
                className="content-image"
              />
            </div>
          ))}
        </Slider>
      )}
    </div>
  );  
};

export default React.memo(Contents);