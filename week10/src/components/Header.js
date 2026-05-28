import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <Link to="/">
          <img src="https://image.tving.com/ntgs/operation/logo/2023/09/18/1695032536_1.svg" alt="TVING" className="logo" />
        </Link>
        <nav className="nav">
          <Link to="/drama">드라마</Link>
          <Link to="/entertainment">예능</Link>
          <Link to="/movie">영화</Link>
          <Link to="/sport">스포츠</Link>
          <Link to="/animation">애니</Link>
          <Link to="/news">뉴스</Link>
          <Link to="/live">라이브</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;