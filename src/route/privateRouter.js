import React from 'react'

import { Route, Redirect } from "react-router-dom";

export const PrivateRoute = ({ component: Component, auth, ...rest }) => (
  <Route
    {...rest}
    render = {props => 
      sessionStorage.getItem('token') !== null ? (
        <Component {...props}/>
      ) : (
        <Redirect to="/login"/>
      )
    }
  />
);