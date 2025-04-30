import React from "react";
import PropTypes from "prop-types";
const Label = ({ htmlFor, label, labelVariant }) => {
  return <label htmlFor={htmlFor} className={`label-form ${labelVariant}`}>{label}</label>;
};
Label.propTypes = {
    htmlFor: PropTypes.string.isRequired,
    label: PropTypes.string,
    labelVariant: PropTypes.string
}
export default Label;
