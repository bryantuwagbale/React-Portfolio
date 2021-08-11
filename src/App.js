import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';




function App() {
  return (
    
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Header/>
          <div className="container">
            {/* <Route exact path="/" component={Home} /> */}
            <Route exact path="/about" component={About} />
            <Route exact path="/projects" component={Projects} />
            {/* <Route exact path="/contact" component={contact} /> */}
          </div>
          {/* <Footer /> */}
        </div>
      </Router>

  );
}






// function App() {
//   return (
//     <div>
//       <Nav></Nav>
//       <main>
//         <About></About>
//       </main>
//     </div>
//   );
// }

export default App;