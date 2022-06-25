import React from "react";
import useSideBar from "store/hooks/useSideBar";

const MainBar = () => {
  const { sideTabState } = useSideBar();
  // return <div>MainBar</div>;
  switch (sideTabState.tabName) {
    case "All Notes":
      return (
        <React.Fragment>
          <p>
            This is Render <strong>{sideTabState.tabName}</strong>
          </p>
        </React.Fragment>
      );
    case "Favorites":
      return (
        <p>
          This is Render <strong>{sideTabState.tabName}</strong>
        </p>
      );
    case "Locked":
      return (
        <p>
          This is Render <strong>{sideTabState.tabName}</strong>
        </p>
      );
    case "Tabs":
      return (
        <p>
          This is Render <strong>{sideTabState.tabName}</strong>
        </p>
      );
    default:
      return null;
  }
};

export default MainBar;
