import React, { Component } from "react";
import {Route, Redirect} from "react-router-dom"
import isAuth from "isAuth"

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        isAuth()
        ? <Component {...props} />
        : <Redirect to='/login' />
    )} />
  )


export default PrivateRoute