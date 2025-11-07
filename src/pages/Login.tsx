import { useState} from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [isActive, setIsActive] = useState(false);

  const handleRegisterClick = () => {
    setIsActive(true);
  };

  const handleLoginClick = () => {
    setIsActive(false);
  };

  const navigation = useNavigate();

  return (
    <div className={`container ${isActive ? "active" : ""}`} id="container">
      <div className="form-container sign-up">
        <form>
          <h1>Criar Conta</h1>
          <div className="social-icons">
            <a href="#" className="icon">
              <i className="fa-brands fa-google"></i>
            </a>
          </div>
          <span>ou use seu e-mail para se registrar</span>
          <input type="text" placeholder="Nome" />
          <input type="text" placeholder="CPF"/>
          <input type="email" placeholder="E-mail" />
          <input type="password" placeholder="Senha" />
          <button type="button">Cadastrar</button>
        </form>
      </div>

      <div className="form-container sign-in">
        <form>
          <h1>Entrar</h1>
          <div className="social-icons">
            <a href="#" className="icon">
              <i className="fa-brands fa-google"></i>
            </a>
          </div>
          <span>ou use seu e-mail e senha</span>
          <input type="email" placeholder="E-mail" />
          <input type="password" placeholder="Senha" />
          <Link to="/forgot-password">Esqueceu sua senha?</Link>
          <button onClick={() => navigation('/home')}type="button">Entrar</button>
        </form>
      </div>

      <div className="toggle-container">
        <div className="toggle">
          <div className="toggle-panel toggle-left">
            <h1>Já tem sua conta?</h1>
            <p>Use seu e-mail cadastrado para acessar todos os recursos do site</p>
            <button className="hidden" onClick={handleLoginClick}>
              Entrar
            </button>
          </div>
          <div className="toggle-panel toggle-right">
            <h1>Novo por aqui?</h1>
            <p>Cadastre-se com seus dados pessoais para aproveitar todos os recursos do site</p>
            <button className="hidden" onClick={handleRegisterClick}>
              Cadastre-se
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
