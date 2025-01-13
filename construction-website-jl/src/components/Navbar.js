import { Link } from 'react-router-dom';
import logo from '../logo.svg';

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 flex items-center justify-between">
        <div className="flex items-center"> 
        <Link to="/">
            <img src={logo} alt="Company logo" className="h-10 mr-4" />
        </Link>
      <ul className="flex space-x-4">
        <li>
          <Link to="/" className="text-white hover:underline">Home</Link>
        </li>
        <li>
          <Link to="/about" className="text-white hover:underline">About Us</Link>
        </li>
        <li>
          <Link to="/featured" className="text-white hover:underline">Featured Work</Link>
        </li>
      </ul>
     </div>
    </nav>
  );
}

export default Navbar;