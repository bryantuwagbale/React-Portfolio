import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact'
import Projects from './components/Projects';




function App() {
  return (
    
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Header/>
          <div className="container">
            {/* <Route exact path="/" component={Home} /> */}
            <About></About>
            <Route exact path="/About" component={About} />
            <Route exact path="/Projects" component={Projects} />
            <Contact></Contact>
            <Route exact path="/Contact" component={Contact} />
          </div>
          {/* <Footer /> */}
        </div>
      </Router>

  );
}








export default App;