import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

import Auth from './../auth/Auth';
import useToken from './../auth/useToken';

import MapUser from "./MapUser";

export default function ProtectedRouter(props) {
    return (
        <>
         <PrivateRoute  component={MapUser} />
        </>
        ) 
}

const PrivateRoute = ({ component: Component, ...rest }) => (

    <Route
    {...rest}

        render={props =>
            Auth.getAuth() ? (
                <Component {...props} />
            ) : (
                <Redirect to={{ pathname: "/"}}/>
            )
        }
    />
);
