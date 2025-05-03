import React from "react";
import PropTypes from "prop-types";
const Button = ({ variant, children, type = "button", onClick = () => {},theme}) => {
  const themeClass = {
    dark: "btn-dark",
    light: "btn-light",
  }
  return (
    <button className={`btn-default ${themeClass[theme]} ${variant}`} type={type} onClick={onClick}>
      {children}
    </button>
  );
};
Button.propTypes = {
  theme: PropTypes.oneOf(['dark', 'light']),
  variant: PropTypes.string,
  children: PropTypes.node,
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
