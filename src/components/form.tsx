import React from "react";
import css from "styles/form.module.scss";

const Form = () => {
  return (
    <div className={css.container}>
      <input type="text" placeholder="Title" />
      <textarea placeholder="Notes...." />
      <input
        onChange={(e) => console.log(e.target.value)}
        type="date"
        name=""
        id=""
      />
    </div>
  );
};
export default Form;
