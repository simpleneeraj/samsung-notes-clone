import { createSlice } from "@reduxjs/toolkit";

const sideTab = createSlice({
  name: "Side Tab",
  initialState: {
    tabID: 0,
    tabName: "All Notes"
  },
  reducers: {
    tabHandler: (state, action) => {
      state.tabName = action.payload;
    }
  }
});

export default sideTab;
