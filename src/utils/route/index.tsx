import React from 'react';
import { Navigate, Outlet, Route } from "react-router-dom";
import Redirect from '../redirect';

// export const AuthComponent = ({ children }: any) => {

//     const isLogin = localStorage.getItem('token')

//     return isLogin ? children : <Redirect to="/login" />
// }

export const ProtectedRoutes = (props: any) => {
    const auth = localStorage.getItem("user");
    console.log({ auth })
    //if the role required is there or not
    if (props.roleRequired) {
        return auth ? <Outlet /> : (<Navigate to="/login" />)
    } else {
        return auth ? <Outlet /> : <Navigate to="/login" />
    }
}

export const PublicRoutes = (props: any) => {
    const auth = false

    return auth ? <Navigate to="/dashboard" /> : <Outlet />
}
