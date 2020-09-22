import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//~~~component imports below here
import Nav from './components/Nav'
import About from './components/About'
import Home from './components/Home'

function App() {
  return (
      <Router>
          <div className="App">
              <Nav />
              <Switch>
                  <Route path="/" exact component={Home}/>
                  <Route path="/home" exact component={Home}/>
                  <Route path="/about" exact component={About}/>
              </Switch>
          </div>
      </Router>
  );
}

export default App;
