import React from "react"
import PropTypes from 'prop-types';
const Input = ({type, placeholder, id, name, variant, value, onChange}) => {
    return (
        <input type={type} placeholder={placeholder} id={id} name={name} className={`input-form ${variant}`} value={value} onChange={onChange} required autoComplete="current-password"/>
    )
}
Input.propTypes = {
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    variant: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func
}
export default Input