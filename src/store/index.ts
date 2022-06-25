import { configureStore } from "@reduxjs/toolkit";
import sideTab from "./slices/sidetab";

const store = configureStore({
  reducer: {
    sideTab: sideTab.reducer
  },
  devTools: true
});

export default store;
