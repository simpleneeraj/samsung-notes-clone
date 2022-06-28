import { configureStore } from "@reduxjs/toolkit";
import formSlice from "./slices/form";
import modelSlice from "./slices/model";
import notesSlice from "./slices/notes";
import sideTab from "./slices/sidetab";

const store = configureStore({
  reducer: {
    sideTab: sideTab.reducer,
    model: modelSlice.reducer,
    form: formSlice.reducer,
    notes: notesSlice.reducer
  },
  devTools: true
});

export default store;
