import React, { useContext } from "react";
import { Navigate } from "react-router";
import { AuthContext } from "../context/AuthContext";

const PrivateRoute = ({ children }:any) => {
  const authContext = useContext(AuthContext);
 const { isAuthenticated } = authContext;

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
