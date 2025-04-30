import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Auth = ({ type, children }) => {
  return (
    <div className="body-auth">
      <h1 className="title-auth">{type === "login" ? "Login" : "Register"}</h1>
      {children}
      {type === "login" && (
        <p className="text-auth">
          Belum punya akun? <Link to="/register">Register</Link>
        </p>
      )}
      {type === "register" && (
        <p className="text-auth">
          Sudah punya akun? <Link to="/">Login</Link>
        </p>
      )}
    </div>
  );
};
Auth.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Auth;
