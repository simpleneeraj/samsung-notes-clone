import React from "react";

interface StickyButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  onClickModel: () => void;
}

const StickyButton = (props: StickyButtonProps) => {
  return (
    <div className="sticky">
      <button onClick={props.onClickModel} className="addNew" {...props}>
        Add New
      </button>
      {/* @ts-ignore */}
      <style jsx>
        {`
          .sticky {
            position: fixed;
            right: 50px;
            bottom: 50px;
            z-index: 10;
          }
          .addNew {
            padding: 1rem;
            min-width: 150px;
            background: rgb(33, 150, 243);
            border-radius: 50px;
          }
          .addNew:active {
            transform: translateY(-2px);
          }
        `}
      </style>
    </div>
  );
};
export default StickyButton;
