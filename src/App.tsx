import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import "./App.css";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import ForgotPassword from "./pages/Password/ForgotPassword";
import Portfolio from "./pages/Portfolio/Portfolio";
import Sobre from "./pages/About/Sobre";
//import Header from "./components/Header";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
