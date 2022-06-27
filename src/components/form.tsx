import React from "react";
import css from "styles/form.module.scss";

interface FormProps {
  onSubmit: () => void;
  onClose: () => void;
}

const Form = (props: FormProps) => {
  const { onClose, onSubmit } = props;
  return (
    <div className={css.container}>
      <div className={css.field}>
        <input type="text" placeholder="Notes Title" />
        <textarea placeholder="Writing Notes...." />
        <input type="date" />
      </div>
      <div className={css.controls}>
        <button onClick={onClose}>Close</button>
        <button onClick={onSubmit}>Submit</button>
      </div>
    </div>
  );
};
export default Form;
