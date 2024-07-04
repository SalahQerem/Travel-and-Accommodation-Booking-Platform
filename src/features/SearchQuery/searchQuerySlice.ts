import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { initialState } from "./constants";
import { SearchState } from "./types";

const searchQuerySlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setSearchQuery: (state, action: PayloadAction<SearchState>) => {
      state = { ...action.payload };
      return state;
    },
    resetSearchQuery: (state) => {
      state = initialState;
      return state;
    },
  },
});

export const { setSearchQuery, resetSearchQuery } = searchQuerySlice.actions;

export default searchQuerySlice.reducer;
