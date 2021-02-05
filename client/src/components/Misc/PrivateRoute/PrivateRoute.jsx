import React from "react";
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({ completedProfile, component: Component, ...rest }) => {
  const isAuthenticated = localStorage.getItem("usertoken");
  console.log(completedProfile);
  return (
    <Route
      {...rest}
      component={(props) => {
        if (isAuthenticated /*&& completedProfile*/) {
          return <Component {...props} />;
        } /*else if (completedProfile === false && isAuthenticated) {
          return <Redirect to="/details" />;
        }*/ else {
          return <Redirect to="/login" />;
        }
      }}
    />
  );
};

export default PrivateRoute;
