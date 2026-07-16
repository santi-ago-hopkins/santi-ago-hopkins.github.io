import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/global.css';
import Home from './pages/index';
import Projects from './pages/projects';
import Contact from './pages/contact';
import Fun from './pages/fun';
import Navigation from './components/Navigation';

function App() {
  return (
    <Router>
      <div className="app-shell">
        <Navigation />
        <div className="page-shell">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/fun" element={<Fun />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
