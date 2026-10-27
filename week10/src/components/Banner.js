import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import './Banner.css';
import banner1 from '../assets/banner1.png';
import banner2 from '../assets/banner2.png';
import banner3 from '../assets/banner3.png';
import banner4 from '../assets/banner4.png';


const Banner = () => {
    const banners = [banner1, banner2, banner3, banner4];

  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: false,
    centerMode: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    centerPadding: '4%',
    beforeChange: (_, next) => setCurrentSlide(next),
  };

  return (
    <div className="main-banner">
      {currentSlide > 0 && (
        <button className="custom-arrow prev-arrow"
          onClick={() => sliderRef.current.slickPrev()}>
            <svg width = "50" height = "50" viewBox = "0 0 24 24"
            fill = "none" stroke = "#ccc" strokeWidth = "1">
                <polyline points = "15 18 9 12 15 6" />
            </svg>
        </button>
      )}
      {currentSlide < banners.length - 1 && (
        <button className="custom-arrow next-arrow"
          onClick={() => sliderRef.current.slickNext()}>
          <svg width = "50" height = "50" viewBox = "0 0 24 24"
            fill = "none" stroke = "#ccc" strokeWidth = "1">
                <polyline points = "9 6 15 12 9 18" />
            </svg>
        </button>
      )}

      <Slider ref={sliderRef} {...settings}>
        {banners.map((image, index) => (
          <div key={index} className="banner-slide">
            <img
              src={image}
              alt={`배너 ${index + 1}`}
              className="banner-image"
            />
          </div>
        ))}
      </Slider>

      <div className="banner-dots">
        {banners.map((_, index) => (
          <span
            key={index}
            className={`dot ${currentSlide === index ? 'active' : ''}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;