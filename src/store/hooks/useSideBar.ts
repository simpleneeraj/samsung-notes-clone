import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../typings/store";
import sideTab from "../slices/sidetab";

const useSideBar = () => {
  const sideTabState = useSelector((state: RootState) => state.sideTab);
  const dispatch = useDispatch();

  const tabHandler = React.useCallback(
    (payload: any) => {
      dispatch(sideTab.actions.tabHandler(payload));
    },
    [dispatch]
  );

  // const basicHandler = (payload: any) => {
  //   dispatch(sideTab.actions.tabHandler(payload));
  // };
  // sideTab.tabID
  return { sideTabState, tabHandler };
};

export default useSideBar;
// const {state,update}=useSideBar()
