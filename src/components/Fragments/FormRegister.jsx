import React from "react";
import PropTypes from "prop-types";
import InputForm from "../Elements/Input";
import Button from "../Elements/Button";
import useInput from "../../hooks/useInput";
const FormRegister = ({ authRegister }) => {
  const [name, onChangeUsername] = useInput();
  const [email, onChangeEmail] = useInput();
  const [password, onPasswordHandler] = useInput();
  const onSubmitHandler = (event) => {
    event.preventDefault();
    authRegister({ name, email, password });
  };
  return (
    <form className="form-auth">
      <InputForm
        type="text"
        name="username"
        placeholder="Masukan username"
        variant="input-username"
        label="Username"
        value={name}
        onChange={onChangeUsername}
        labelVariant={"label-username"}
      />
      <InputForm
        name="email"
        type="email"
        placeholder="Masukan Email"
        variant="input-email"
        label="Email"
        labelVariant="label-email"
        onChange={onChangeEmail}
        value={email}
      />
      <InputForm
        name="password"
        label="Password"
        type="password"
        placeholder="**********"
        variant="input-password"
        labelVariant="label-password"
        onChange={onPasswordHandler}
        value={password}
      />
      <Button onClick={onSubmitHandler} variant="btn-auth">
        Register
      </Button>
    </form>
  );
};

FormRegister.propTypes = {
  authRegister: PropTypes.func.isRequired,
};

export default FormRegister;
