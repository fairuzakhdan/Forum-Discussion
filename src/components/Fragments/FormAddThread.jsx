import React, { useState } from "react";
import InputForm from "../Elements/Input";
import useInput from "../../hooks/useInput";
import Button from "../Elements/Button";
import PropTypes from "prop-types";
const FormAddThread = ({ addThread }) => {
  const [title, onChangeAddTitleThread] = useInput('');
  const [category, onChangeAddcategoryThread] = useInput('');
  const [body, setBody] = useState("");
  const onAddThread = (event) => {
    event.preventDefault();
    addThread({ title, category, body });
  };
  const inputThreadBody = (event) => {
    setBody(event.target.innerText);
  };
  return (
    <form onSubmit={onAddThread}>
      <InputForm
        type="text"
        name="title"
        placeholder="Masukan judul thread"
        variant="add-title-thread"
        onChange={onChangeAddTitleThread}
        value={title}
      />
      <InputForm
        type="text"
        name="category"
        placeholder="Masukan category thread"
        variant="add-category-thread"
        onChange={onChangeAddcategoryThread}
        value={category}
      />
      <div
        className="input-comment"
        data-placeholder="Masukan Isi Catatan ...."
        data-testid="input-comment"
        contentEditable
        onInput={inputThreadBody}
      />
      <Button type="submit" variant="btn-addThread btn-auth">
        Buat
      </Button>
    </form>
  );
};

FormAddThread.propTypes = {
  addThread: PropTypes.func.isRequired,
};
export default FormAddThread;
