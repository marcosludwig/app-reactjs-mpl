import { Link } from 'react-router-dom';
import './style.css';

const NavBar = () => {
  return (
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to='/gallery/320/240'>Galeria QVGA</Link>
          </li>
          <li>
            <Link to='/gallery/640/480'>Galeria SD</Link>
          </li>
          <li>
            <Link to='/gallery/1280/720'>Galeria HD</Link>
          </li>
          <li>
            <Link to='/gallery/1920/1080'>Galeria Full HD</Link>
          </li>
          <li>
            <Link to='/about'>Sobre</Link>
          </li>
          <li>
            <Link to='/contact'>Contato</Link>
          </li>
        </ul>
      </nav>
    );
};

export default NavBar;