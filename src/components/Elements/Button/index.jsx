import React from "react";
import PropTypes from "prop-types";
const Button = ({ variant, children, type = "button", onClick = () => {} }) => {
  return (
    <button className={`btn-default ${variant}`} type={type} onClick={onClick}>
      {children}
    </button>
  );
};
Button.propTypes = {
  variant: PropTypes.string,
  children: PropTypes.node,
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
