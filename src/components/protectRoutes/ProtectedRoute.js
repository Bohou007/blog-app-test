import React, { Component, Suspense } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Comp, loggedIn, path, ...rest }) => {
  return (
    <Route
      path={path}
      {...rest}
      render={(props) => {
        return localStorage.getItem("loggedIn") ? (
          <Comp {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/auth/signin",
              state: {
                prevLocation: path,
                error: "You need to login first!",
              },
            }}
          />
        );
      }}
    />
  );
};

export default ProtectedRoute;
