import React from "react";
import Auth from "../components/Layouts/Auth";
import FormLogin from "../components/Fragments/FormLogin";
import { useDispatch } from "react-redux";
import { asyncSetAuthUser } from "../states/authUser/action";
const LoginPage = () => {
  const dispatch = useDispatch();
  const onAuthLoginHandler = ({email, password }) => {
    dispatch(asyncSetAuthUser({email, password}));
  };
  return (
    <Auth type="login">
      <FormLogin authLogin={onAuthLoginHandler}/>
    </Auth>
  );
};

export default LoginPage;
