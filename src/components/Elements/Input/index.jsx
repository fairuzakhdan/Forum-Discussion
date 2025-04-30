import React from "react";
import Input from "./input";
import Label from "./Label";
import PropTypes from "prop-types";
const InputForm = ({
  name,
  type,
  placeholder,
  variant,
  label,
  value,
  onChange,
  labelVariant,
}) => {
  return (
    <>
      <Label htmlFor={name} label={label} labelVariant={labelVariant} />
      <Input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        variant={variant}
        value={value}
        onChange={onChange}
      />
    </>
  );
};
InputForm.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  variant: PropTypes.string,
  label: PropTypes.string,
  labelVariant: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};
export default InputForm;
