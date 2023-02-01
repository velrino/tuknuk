import React from 'react';
import { Route } from "react-router-dom";
import Redirect from '../../redirect';

export const AuthComponent = ({ children }: any) => {

    const isLogin = localStorage.getItem('token')

    return isLogin ?  children : <Redirect to="/login"/>
}

// export const GuardedRoute = ({ component: Component, auth, ...rest }) => (
//     <Route {...rest} render={(props) => (
//         auth === true
//             ? <Component {...props} />
//             : <Redirect to="/"/>
//     )} />
// )