import React from "react";
import { Link } from 'react-router-dom';
import Logo from './tving.svg';

function Header() {
  return (
    <header style={{ position: 'fixed', backgroundColor: 'black', display: 'flex', top: 0, left: 0, width: '100%', boxSizing: 'border-box', zIndex: 10, padding: '7px 5px' }}>
      <Link to="/"><img src={Logo} style={{ width: '100px', height: 'auto' }} /></Link>
      <nav style={{ display: 'flex', gap: '20px', margin: 'auto 10px' }}>
        <Link to="/drama" style={{ color: '#d9d9d9', textDecoration: 'none' }}>드라마</Link>
        <Link to="/entertainment" style={{ color: '#d9d9d9', textDecoration: 'none' }}>예능</Link>
        <Link to="/movie" style={{ color: '#d9d9d9', textDecoration: 'none' }}>영화</Link>
        <Link to="/sports" style={{ color: '#d9d9d9', textDecoration: 'none' }}>스포츠</Link>
        <Link to="/animation" style={{ color: '#d9d9d9', textDecoration: 'none' }}>애니</Link>
      </nav>
    </header>
  );
}

export default Header;