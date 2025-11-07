import "./Header.css";
import logo from "../assets/logo1.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar">
      <div className="nav-content">
        <Link to="/" className="logo">
        <img src={logo} alt="Logo Ryan Gomes" />
        </Link>
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/sobre">Sobre</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
          <li><Link to="/contato">Contatos</Link></li>
        </ul>
        <div>
          <Link to="/login">Área do Cliente</Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
