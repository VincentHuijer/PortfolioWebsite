import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './views/Homepage';
import Portfolio from './views/Portfolio';
import Skills from './views/Skills';
import Todo from './views/Todo';
import Profiel from './views/Profiel';
import './index.css';
import Theaterlaak from './views/subviews/Ervaringen/TheaterLaak'
import Uniware from './views/subviews/Ervaringen/Uniware'

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/profiel" element={<Profiel />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/theaterLaak" element={<Theaterlaak />} />
          <Route path="/Uniware" element={<Uniware />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
