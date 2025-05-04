import React from "react";
import PropTypes from "prop-types";
const Button = ({label, variant, children, type = "button", onClick = () => {},theme}) => {
  const themeClass = {
    dark: "btn-dark",
    light: "btn-light",
  }
  return (
    <button className={`btn-default ${themeClass[theme]} ${variant}`} type={type} onClick={onClick} aria-label={label}>
      {children}
    </button>
  );
};
Button.propTypes = {
  theme: PropTypes.oneOf(['dark', 'light']),
  variant: PropTypes.string,
  children: PropTypes.node,
  type: PropTypes.string,
  onClick: PropTypes.func,
  label: PropTypes.string
};

export default Button;
