import React from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { Route, Link } from 'react-router-dom';
import NavBar from './components/Nav';




function App() {
  return (
    <div className="App">
    <NavBar />
    <Route exact path='/' component={Home} />
    <Route exact path='/about' component={About} />
    <Route exact path='/projects' component={Projects} />
    <Route exact path='/contact' component={Contact} />
  </div>
  );
}

export default App;