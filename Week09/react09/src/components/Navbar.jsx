import { Link, useLocation } from 'react-router-dom';
import Logo from './image.png'

function Navbar() {
  const location = useLocation();
  if (location.pathname === "/home") {
    return null;
  }

  return (
    <header style={{ position: 'absolute', top: 0, left: 0, width: '100%', zIndex: 10, padding: '20px 30px' }}>
      <Link to="/"><img src={Logo} style={{ width: '130px', height: 'auto' }} /> </Link>
    </header>
  );
}

export default Navbar;