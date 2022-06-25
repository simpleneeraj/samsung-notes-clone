import React from "react";
import Tabs from "./Tabs";
import Locked from "./Locked";
import AllNotes from "./allNotes";
import Favorites from "./Favorites";
import useSideBar from "store/hooks/useSideBar";

const MainBar = () => {
  const { sideTabState } = useSideBar();
  // return <div>MainBar</div>;
  switch (sideTabState.tabName) {
    case "All Notes":
      return <AllNotes />;
    case "Favorites":
      return <Favorites />;
    case "Locked":
      return <Locked />;
    case "Tabs":
      return <Tabs />;
    default:
      return null;
  }
};

export default MainBar;
