import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import Landing from './components/Landing/Landing';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/Header';
import Auth from './services/auth';
import Login from './components/Landing/Login';
import Register from './components/Landing/Register';
import Favourites from './components/Favourites';
import Favourite from './services/favourites'
const auth = new Auth();
const favourite = new Favourite()
function App(props) {
  return (
    <Router>
     
        <main>
          <Header auth={auth}/>
          <Switch>
            <Route path="/" exact render={props=><Landing auth={auth} {...props}/>} />
            <Route path="/home"  render={props=><Home auth={auth} {...props}/>} />
            <Route path="/login"  exact render={props=><Login auth={auth} {...props}/>}/>
            <Route path="/register"  render={props=><Register auth={auth} {...props}/>}/>
            <Route path="/favourites" render={props=><Favourites auth={auth} favourite={favourite} {...props}/>}/>
            {/* <Route path="/contact"  component={Contact} /> */}
          </Switch>
        </main>
       
    </Router>
  );
}

export default App;
