import { Link, NavLink } from 'react-router-dom';
import netflixLogo from '../Netflix_Logo_RGB.png'

function Navbar() {
 return (
   <nav className="nav_box">
     <div className="container navbar-container">
       <div className="navbar-brand">
          <button className="netflixLogo_button">
            <Link to="/login"><img width={ "148px" }
              height={ "40px" }
              object-fit="cover"
              src={netflixLogo} /></Link>
          </button>
       </div>
     </div>
   </nav>
 );
}

export default Navbar;