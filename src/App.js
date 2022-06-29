import React from 'react';
import {
  BrowserRouter as Router, Switch, Route,
} from "react-router-dom";
import SignupPage from './pages/Signup';
import LoginPage from './pages/Login';
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={LoginPage} />
        <Route path="/signup" exact component={SignupPage} />
      </Switch>
    </Router>
  );
}

export default App;
