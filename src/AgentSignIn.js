// AdminSignIn.js
import React from 'react';
import logo from './logo.svg';
import './App.css';
import SignIn from './components/auth/SignInAdmin';
import SignUp from './components/auth/SignUpAdmin';
import AuthDetails from './components/AuthDetailsAdmin';
import AuthDisDetails from './components/AuthDetailsDistributer';
import AuthAgDetails from './components/AuthDetailsAgent'
import {Routes, Route, useNavigate} from 'react-router-dom';

const AdminSignIn = () => {
    return (
        <div className="Ap">
            
       <SignIn />
       <SignUp />
       <AuthDetails />
       </div>
         );
};

export default AdminSignIn;
