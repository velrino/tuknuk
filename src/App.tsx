
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import './App.scss';
import Dashboard from './pages/dashboard';
import Login from './pages/login';
import { AuthComponent } from './utils/guards/route';
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
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div>
        <ul>
          <li>
            <Link to='/'>
              Link to Home Page
            </Link>
          </li>
          <li>
            <Link to='/login'>
              Link to login Page
            </Link>
          </li>
          <li>
            <Link to='/dashboard'>
              Link to dashboard Page
            </Link>
          </li>
        </ul>
        <button onClick={login}>Login</button>
        <br />
        <button onClick={logout}>Logout</button>
      </div>
      <Routes>
        <Route path='/' element={lazyLoad('loading')} />
        <Route path="/login" element={lazyLoad('login')} />
        <Route path="/dashboard" element={<AuthComponent>
          {lazyLoad('dashboard')}
        </AuthComponent>} />
        {/* <Route path="/dashboard" element={lazyLoad('login')} /> */}

        {/* <Route exact path='/' component={Loading} />
        <Route path='/protected' component={Dashboard} />
        <Route path='/unprotected' component={Login} /> */}
      </Routes>
    </BrowserRouter>

  );
}

export default App;
