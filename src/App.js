import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './views/Homepage';
import Portfolio from './views/Portfolio';
import Skills from './views/Skills';
import Todo from './views/Todo';
import Profiel from './views/Profiel';
import './index.css';
import Theaterlaak from './views/subviews/Ervaringen/TheaterLaak'
import Uniware from './views/subviews/Ervaringen/Uniware'
import Betabit from './views/subviews/Ervaringen/Betabit'
import TheGreatOutdoors from './views/subviews/Ervaringen/TheGreatOutdoors'
import Reacties from './views/Reacties';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/profiel" element={<Profiel />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/Reacties" element={<Reacties />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/theaterLaak" element={<Theaterlaak />} />
          <Route path="/Uniware" element={<Uniware />} />
          <Route path="/Betabit" element={<Betabit />} />
          <Route path="/TheGreatOutdoors" element={<TheGreatOutdoors />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
