import React from 'react';
import NavBar from './components/elements/NavBar/index.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Mint from './pages/Mint';
import About from './pages/About';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
      <Route path='/' element={<Mint/>} />
      </Routes>
    </Router>
  );
}

export default App;