// AdminSignIn.js
import React from 'react';
import logo from './logo.svg';
import './App.css';
import SignIn from './components/auth/SignInDistributer';
import SignUp from './components/auth/SignUpDistributer';
import AuthDetails from './components/AuthDetailsAdmin';
import AuthDisDetails from './components/AuthDetailsDistributer';
import AuthAgDetails from './components/AuthDetailsAgent'
import {Routes, Route, useNavigate} from 'react-router-dom';

const DistributorSignIn = () => {
    return (
        <div className="Ap">
       <SignIn />
       <SignUp />
       <AuthDisDetails />
       </div>
         );
};

export default DistributorSignIn;
