import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; //Routes instead of Switch since React-router-dom v6
import Navbar from './components/Navbar';
import Homepage from './views/Homepage';
import Projects from './views/Projects';
import Skills from './views/Skills';
import Todo from './views/Todo';


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" exact component={Homepage} />
          <Route path="/projects" component={Projects} />
          <Route path="/skills" component={Skills} />
          <Route path="/todo" component={Todo} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
