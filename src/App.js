import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home/Home';
import Landing from './Landing/Landing';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Header from './Header';


function App() {
  return (
    <Router>
      <main>
        <Header />
        <Switch>
          <Route path="/"  exact component={Landing} />
          <Route path="/home"  component={Home} />
          {/* <Route path="/contact"  component={Contact} /> */}
        </Switch>
      </main>
    </Router>
  );
}

export default App;
