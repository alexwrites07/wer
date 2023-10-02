import logo from './logo.svg';
import './App.css';
import SignIn from './components/auth/SignInAdmin';
import SignUp from './components/auth/SignUpAgent';
import AuthDetails from './components/AuthDetailsAdmin';
import AuthDisDetails from './components/AuthDetailsDistributer';
import AuthAgDetails from './components/AuthDetailsAgent'
import {Routes, Route, useNavigate} from 'react-router-dom';

// App.js
import Front from "./front"
import Hello from "./hello"
import React, { useState } from 'react';
import AdminSignIn from './AdminSignIn';
import DistributorSignIn from './DistributorSignIn';
import AgentSignIn from './AgentSignIn';
import { BrowserRouter as Router, Redirect, Switch } from 'react-router-dom';
const App = () => {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // const handleLogin = () => {
  //   // Your login logic goes here

  //   // Assuming login is successful, set isLoggedIn to true
  //   setIsLoggedIn(true);
  // };
  const [selectedOption, setSelectedOption] = useState(null);

  const renderSignInPage = () => {
    switch (selectedOption) {
      case 'admin':
        return <AdminSignIn />;
      case 'distributor':
        return <DistributorSignIn />;
      case 'agent':
        return <AgentSignIn />;
      default:
        return null;
    }
  };
  return (
    <div>
      
      <center>
      <h1>Select Sign In Option:</h1>
      <button onClick={() => setSelectedOption('admin')}>Sign In as Admin</button>
      <button onClick={() => setSelectedOption('distributor')}>Sign In as Distributor</button>
      <button onClick={() => setSelectedOption('agent')}>Sign In as Agent</button>
      <br></br><br></br><br></br><br></br><br></br><br></br>
      {renderSignInPage()}

      </center>
    </div>
  
    // <Router>
    //   <Switch>
    //     <Route path="/login" element={Hello} />
    //     <Route path="/dashboard" component={Front} />
    //     {/* Redirect to the login page if the route is not recognized */}
    //     <Redirect from="*" to="/login" />
    //   </Switch>
    // </Router>
  );
};

export default App;

