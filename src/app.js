import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/index';
import Projects from './pages/projects';
import Contact from './pages/contact';
import Resume from './pages/resume';
import Portfolio from './pages/portfolio';
import Fun from './pages/fun';
import Navigation from './components/Navigation';

function App() {
  return (
    <Router>
      <div style={{ paddingBottom: '60px' }}> {/* Add padding to account for fixed navbar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/fun" element={<Fun />} />
        </Routes>
      </div>
      <Navigation />
    </Router>
  );
}

export default App;
