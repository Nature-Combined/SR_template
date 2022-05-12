import { createSlice } from "@reduxjs/toolkit";

export const kakaoSlice = createSlice({
  name: "kakao",
  initialState: {
    token: "",
  },
  reducers: {
    kakaoReducer: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const { kakaoReducer } = kakaoSlice.actions;
