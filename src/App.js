import React from 'react';
import backgroundVideo from './assets/background/background.mp4'; 
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Projects from './Pages/Projects';
import Technologies from './Pages/Technologies';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/technologies" element={<Technologies />} />
      </Routes>
      <video autoPlay loop id="background-video">
        <source src={backgroundVideo} type="video/mp4" />
        {/* Tambahkan elemen source tambahan jika diperlukan untuk format video lainnya */}
      </video>
    </Router>
  );
}

export default App;