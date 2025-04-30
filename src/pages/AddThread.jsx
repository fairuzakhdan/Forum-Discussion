import React from "react";
import FormAddThread from "../components/Fragments/FormAddThread";
import { asyncThread } from "../states/threads/action";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const AddThreadPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onAddThreadHandler = ({ title, category,body }) => {
    dispatch(asyncThread({ title, body, category }));
    navigate("/");
  };
  return (
    <div className="addThread-page">
      <h2>Buat Diskusi Baru</h2>
      <FormAddThread addThread={onAddThreadHandler} />
    </div>
  );
};
export default AddThreadPage;
