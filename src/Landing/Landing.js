import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import Login from './Login';
import Register from './Register'
export default function Landing(){
    const isAuthenticated = true;
    return(
        <Router>
            {
                !isAuthenticated?
                <>
                  <div>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to={`/Register`}>Register</Link></li>
                </div>
                <Switch>
                    <Route path="/login"  exact component={Login} />
                    <Route path="/register"  component={Register} />
                </Switch>
                </>:
                <Redirect to="/home" />
            }
          {/* <Route path="/contact"  component={Contact} /> */}
      
        </Router>
    )
    
}