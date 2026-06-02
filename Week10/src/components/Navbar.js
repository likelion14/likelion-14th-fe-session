import { Link, NavLink } from 'react-router-dom';
import wavveLogo from '../images/wavve_logo.svg'
import searchIcon from '../images/magnifying-glass-solid-full.svg'
import userIcon from '../images/user-regular-full.svg'

function Navbar() {
 return (
   <nav className="nav_box">
     <div className="navbar-container">
       <div className="navbar-content">
          <button className="wavveLogo_button">
            <Link to="/" className="wavveLogo_button">
            <img src={wavveLogo} alt="Wavve Logo" style={{ objectFit: 'cover' }} />
            </Link>
          </button>
          <ul className='w-menu-list'>
            <li className='w-menu-item'><Link to="/entertainment">예능</Link></li>
            <li className='w-menu-item'><Link to="/drama">드라마</Link></li>
            <li className='w-menu-item'><Link to="/movie">영화</Link></li>
            <li className='w-menu-item'><Link to="/documentary">시사교양</Link></li>
            <li className='w-menu-item'><Link to="/anime">애니</Link></li>
            <li className='w-menu-item'><Link to="/overseas">해외 시리즈</Link></li>
            <li className='w-menu-item'><Link to="/live">LIVE</Link></li>
          </ul>
          <ul className='w-menu-list' style={{ marginLeft: "auto" }}>
            <li className='w-menu-item'>
                <div>
                    <button className='search-button'>
                        <img height={"22px"}
                            width={"22px"}
                            object-fit="cover"
                            src={searchIcon} />
                    </button>
                </div>
                <div>
                    <button className='user-button'>
                        <img height={"22px"}
                            width={"22px"}
                            object-fit="cover"
                            src={userIcon} />
                    </button>
                </div>
            </li>
          </ul>
       </div>
     </div>
   </nav>
 );
}

export default Navbar;