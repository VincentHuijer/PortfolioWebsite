import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './views/Homepage';
import Projects from './views/Projects';
import Skills from './views/Skills';
import Todo from './views/Todo';
import Profiel from './views/Profiel';
import './index.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/profiel" element={<Profiel />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/todo" element={<Todo />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
