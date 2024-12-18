import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import TourList from './components/Tour List/index';
import Home from './components/Pages/Home';
import About from './components/Pages/About';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/tours" element={<TourList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
