import React from "react";
import css from "styles/model.module.scss";

type ModelContainerProps = {
  isOpen: boolean;
  children: React.ReactNode | React.ReactNode[];
};

const ModelContainer = (props: ModelContainerProps) => {
  const { isOpen = false, children } = props;

  return (
    <React.Fragment>
      {isOpen ? <div className={css.content}>{children}</div> : null}
    </React.Fragment>
  );
};
export default ModelContainer;
