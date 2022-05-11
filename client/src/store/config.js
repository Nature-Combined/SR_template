import { configureStore } from "@reduxjs/toolkit";
import { testReducer } from "./slice/test";

export const store = configureStore({
  reducer: {
    test: testReducer,
  },
});
