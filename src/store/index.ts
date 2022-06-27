import { configureStore } from "@reduxjs/toolkit";
import modelSlice from "./slices/model";
import sideTab from "./slices/sidetab";

const store = configureStore({
  reducer: {
    sideTab: sideTab.reducer,
    model: modelSlice.reducer
  },
  devTools: true
});

export default store;
