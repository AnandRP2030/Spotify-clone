import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function PrivateLogin({ children }) {

    const data = useSelector((payload) => {
        return payload.SignupReducer
    })
  if (!data.isAuth) {
    return <Navigate to="/Signup" />;
  }

  return children;
}

export default PrivateLogin;