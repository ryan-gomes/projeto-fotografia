//import "./Header.css";
import logo from "../assets/logo1.png";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Logo Ryan Gomes" />
      </div>
      <nav className="nav">
        <a href="#about">Sobre</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact">Contato</a>
        <a href="#login">Área do Cliente</a>
      </nav>
    </header>
  );
};

export default Header;
