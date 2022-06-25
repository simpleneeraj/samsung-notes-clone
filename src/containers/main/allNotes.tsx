import React from "react";
import css from "styles/notes.module.scss";

const AllNotes = () => {
  return (
    <div className={css.container}>
      <div className={css.top}>
        <h4>Heading</h4>
      </div>
      <div className={css.grid}>
        {
          // @ts-ignore
          [...Array(10).keys()].map((_, index) => (
            <Item key={index} title={index} />
          ))
        }
      </div>
    </div>
  );
};
export default AllNotes;

const Item = ({ title }: any) => {
  return <div className={css.items}>{title}</div>;
};
