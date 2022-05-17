import { createSlice } from "@reduxjs/toolkit";

export const sublistSlice = createSlice({
  name: "sublist",
  initialState: {
    list: [],
  },
  reducers: {
    sublistReducer: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { sublistReducer } = sublistSlice.actions;
