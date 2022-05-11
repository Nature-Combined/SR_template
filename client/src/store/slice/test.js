import { createSlice } from "@reduxjs/toolkit";

export const testSlice = createSlice({
  name: "test",
  initialState: {
    testValue: 0,
  },
  reducers: {
    testReducer: (state, action) => {
      state.testValue = action.payload;
    },
  },
});

export const { testReducer } = testSlice.actions;
