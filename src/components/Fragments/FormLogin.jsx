import React from "react";
import InputForm from "../Elements/Input";
import Button from "../Elements/Button";
import PropTypes from "prop-types";
import useInput from "../../hooks/useInput";
const FormLogin = ({ authLogin }) => {
  const [email, onChangeEmail] = useInput('');
  const [password, onPasswordHandler] = useInput('');
  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log({ email, password });
    authLogin({ email, password });
  };
  return (
    <form className="form-auth" data-testid="form-login">
      <InputForm
        name="email"
        type="email"
        placeholder="Masukan Email"
        label="Email"
        variant="input-email"
        labelVariant="label-email"
        onChange={onChangeEmail}
        value={email}
      />
      <InputForm
        name="password"
        type="password"
        label="Password"
        placeholder="**********"
        variant="input-password"
        labelVariant="label-password"
        onChange={onPasswordHandler}
        value={password}
      />
      <Button onClick={onSubmitHandler} variant="btn-auth">
        Login
      </Button>
    </form>
  );
};
FormLogin.propTypes = {
  authLogin: PropTypes.func.isRequired,
};

export default FormLogin;
