import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "tab",
  initialState: "",
  reducers: {
    tabSelect: (tab, action) => (tab = action.payload),
  },
});

export const { tabSelect } = slice.actions;
export default slice.reducer;
