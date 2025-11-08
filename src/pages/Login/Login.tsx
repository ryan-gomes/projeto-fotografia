import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import styles from "./Login.module.css";
import Footer from "../../components/footer/Footer";
import { useAuth } from "../../context/AuthContext";

const Login = () => {
  const [isActive, setIsActive] = useState(false);

  const handleRegisterClick = () => setIsActive(true);
  const handleLoginClick = () => setIsActive(false);

  const navigation = useNavigate();
  const { login } = useAuth();

  return (
    <>
      <div className={`${styles.container} ${isActive ? styles.active : ""}`} id="container">
        <div className={`${styles["form-container"]} ${styles["sign-up"]}`}>
          <form>
            <h1>Criar Conta</h1>
            <div className={styles["social-icons"]}>
              <a href="#" className={styles.icon}>
                <i className="fa-brands fa-google"></i>
              </a>
            </div>
            <span>ou use seu e-mail para se registrar</span>
            <input type="text" placeholder="Nome" />
            <input type="text" placeholder="CPF" />
            <input type="email" placeholder="E-mail" />
            <input type="password" placeholder="Senha" />
            <button type="button">Cadastrar</button>
          </form>
        </div>

        <div className={`${styles["form-container"]} ${styles["sign-in"]}`}>
          <form>
            <h1>Entrar</h1>
            <div className={styles["social-icons"]}>
              <a href="#" className={styles.icon}>
                <i className="fa-brands fa-google"></i>
              </a>
            </div>
            <span>ou use seu e-mail e senha</span>
            <input type="email" placeholder="E-mail" />
            <input type="password" placeholder="Senha" />
            <Link to="/forgot-password">Esqueceu sua senha?</Link>
            <button onClick={() => { login(); navigation('/home'); }} type="button">
              Entrar
            </button>
          </form>
        </div>

        <div className={styles["toggle-container"]}>
          <div className={styles.toggle}>
            <div className={`${styles["toggle-panel"]} ${styles["toggle-left"]}`}>
              <h1>Já tem sua conta?</h1>
              <p>Use seu e-mail cadastrado para acessar todos os recursos do site</p>
              <button className={styles.hidden} onClick={handleLoginClick}>
                Entrar
              </button>
            </div>
            <div className={`${styles["toggle-panel"]} ${styles["toggle-right"]}`}>
              <h1>Novo por aqui?</h1>
              <p>Cadastre-se com seus dados pessoais para aproveitar todos os recursos do site</p>
              <button className={styles.hidden} onClick={handleRegisterClick}>
                Cadastre-se
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
