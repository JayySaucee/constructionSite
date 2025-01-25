import { Link } from 'react-router-dom';
import logo from '../photos/stockLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons'

function Navbar() {
  return (
    <nav className="p-2 flex items-center justify-between">
      <div className="flex items-center">
        <Link to="/">
          <img src={logo} alt="Company logo" className="h-32  mr-4 drop-shadow-md" />
        </Link>
      </div>
      <ul className="flex space-x-10">
        <li>
          <Link to="/" className="text-gray-400 text-2xl hover:font-semibold hover:text-black" style={{ fontFamily: 'Montserrat, sans-serif' }}>Home</Link>
        </li>
        <li>
          <Link to="/about" className="text-gray-400 text-2xl hover:font-semibold hover:text-black" style={{ fontFamily: 'Montserrat, sans-serif' }}>About Us</Link>
        </li>
        <li>
          <Link to="/contact" className="text-gray-400 text-2xl hover:font-semibold hover:text-black" style={{ fontFamily: 'Montserrat, sans-serif' }}>Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;