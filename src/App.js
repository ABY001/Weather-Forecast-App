import React from 'react';
import {
  BrowserRouter as Router, Switch, Route,
} from "react-router-dom";
import SignupPage from './pages/Signup';
import LoginPage from './pages/Login';
import Home from "./pages/Home";
import { AuthProvider } from "./components/Firebase/Auth";
import PrivateRoute from "./components/Firebase/PrivateRoute";


function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <PrivateRoute path="/" exact component={Home} />
          <Route path="/login" exact component={LoginPage} />
          <Route path="/signup" exact component={SignupPage} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
