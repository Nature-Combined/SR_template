import { createSlice } from "@reduxjs/toolkit";

export const colorSlice = createSlice({
  name: "test",
  initialState: {
    mode: "light",
  },
  reducers: {
    colorReducer: (state, action) => {
      state.mode = action.payload;
    },
  },
});

export const { colorReducer } = colorSlice.actions;
