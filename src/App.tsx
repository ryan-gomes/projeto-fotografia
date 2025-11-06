import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './pages/Home'
import Login from "./pages/Login";
import Header from './components/Header'
import Footer from './components/Footer'

function App() {

  return (
    <Router>
       <Header /> {/* Header sempre visível */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer /> {/* Footer sempre visível */}
    </Router>
  )
}

export default App
