import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './component/Navbar/NavgationBar';
import Home from './component/Home/Home';
import About from './component/About/About'; // Ensure you have this component created
import Skills from './component/Skills/Skills'; 
import Projects from './component/Projects/Projects';
import Contact from './component/Contact/Contact';

import './App.css';

const App = () => {
  return (
    <Router basename='">
      <div className="app">
        <Navbar />
        <div className="content">
          <Routes>
            {/* <Route path="/" element={<Navigate to="/home" replace />} /> */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} /> 
            <Route path="/contact" element={<Contact />} />
            {/* <Route path="/" element={<Navigate to="/home" replace />} /> */}
          </Routes>
        </div>
      </div>
    </Router>
  
  );
}

export default App;



