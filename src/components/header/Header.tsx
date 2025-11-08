import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo1.png";
import { useAuth } from "../../context/AuthContext";
import styles from "./Header.module.css";

const Header = () => {
  const { isLoggedIn } = useAuth();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.navContent}>
        <Link to="/home" className={styles.logo}>
          <img src={logo} alt="Logo Ryan Gomes" />
        </Link>

        <ul className={styles.navLinks}>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/sobre">Sobre</Link></li>
          <li><Link to="/portfolio">Portfólio</Link></li>
          <li><Link to="/contato">Contatos</Link></li>
        </ul>

        <div className={styles.clientArea}>
          {isLoggedIn ? (
            <Link to="/galeria/123">Minha Galeria</Link>
          ) : (
            <Link to="/login">Área do Cliente</Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
