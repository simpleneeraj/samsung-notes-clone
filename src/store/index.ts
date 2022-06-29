import { configureStore } from "@reduxjs/toolkit";
import { todoAPI } from "./services/todo";
import formSlice from "./slices/form";
import modelSlice from "./slices/model";
import notesSlice from "./slices/notes";
import sideTab from "./slices/sidetab";

const store = configureStore({
  reducer: {
    sideTab: sideTab.reducer,
    model: modelSlice.reducer,
    form: formSlice.reducer,
    notes: notesSlice.reducer,
    [todoAPI.reducerPath]: todoAPI.reducer,
    // [pokemonApi.reducerPath]: pokemonApi.reducer,
  },
  devTools: process.env.NODE_ENV === "development",
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(todoAPI.middleware),
});

export default store;
