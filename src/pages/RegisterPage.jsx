import React from "react";
import Auth from "../components/Layouts/Auth";
import FormRegister from "../components/Fragments/FormRegister";
import { useNavigate } from "react-router-dom";
import api from "../utils/api";
const RegisterPage = () => {
  const navigate = useNavigate();
  const onAuthRegisterHandler = async ({ name, email, password }) => {
    try {
      await api.register({ name, email, password });
      navigate("/");
    } catch (err) {
      alert(err.message);
    }
  };
  return (
    <Auth type="register">
      <FormRegister authRegister={onAuthRegisterHandler} />
    </Auth>
  );
};
export default RegisterPage;
