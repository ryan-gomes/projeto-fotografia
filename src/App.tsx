import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import Home from './pages/Home'
import Login from "./pages/Login";
import About from "./pages/About";
import ForgotPassword from "./pages/ForgotPassword";
import Header from "./components/Header";

function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to = "/login"/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  )
}

export default App
