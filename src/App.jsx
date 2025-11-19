import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact'
import Project from './pages/Project'
import Footer from "./components/Footer";
import './index.css'

function App() {

  return (
    <BrowserRouter>
      <Navbar />

    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/contact" element={<Contact />}/>
      <Route path="/projects" element={<Project />}/>
    </Routes>

    <Footer />
    </BrowserRouter>

  )
}

export default App
