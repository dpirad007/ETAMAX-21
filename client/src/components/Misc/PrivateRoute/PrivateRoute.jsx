import React from "react";
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({ auth, tok, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      component={(props) => {
        if (auth && tok) {
          return <Component {...props} />;
        } else if (!auth && tok) {
          return <Redirect to="/details" />;
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />
  );
};

export default PrivateRoute;
