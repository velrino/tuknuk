
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import './App.scss';
import Main from './components/main';
import Login from './pages/login';
import MainRoutes from './Routes';
import { lazyLoad } from './utils/lazyload';

function App() {
  const [isAutheticated, setisAutheticated] = useState(false);

  function login() {
    setisAutheticated(true);
    localStorage.setItem('token', "123")
    console.log("loggedInUser:" + isAutheticated)
  }

  function logout() {
    setisAutheticated(false);
    localStorage.removeItem('token')
    console.log("loggedInUser:" + isAutheticated)
  }

  return (
    <MainRoutes />
  );
}

export default App;
