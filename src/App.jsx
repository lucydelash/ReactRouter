import { useState } from 'react';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Red from './Components/Red';
import Blue from './Components/Blue';
import Home from './Components/Home';

function App() {
  const [] = useState(0);

  return (
    <>
      <div id="container">
        <div id="navbar">
          <Link to="/">Home</Link>
          <Link to="/blue">Blue</Link>
          <Link to="/red">Red</Link>
        </div>
        <div id="main-section">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blue" element={<Blue />} />
            <Route path="/red" element={<Red />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;