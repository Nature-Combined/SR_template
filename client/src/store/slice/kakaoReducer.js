import { createSlice } from "@reduxjs/toolkit";

export const kakaoSlice = createSlice({
  name: "kakao",
  initialState: {
    user_info: "",
  },
  reducers: {
    kakaoReducer: (state, action) => {
      state.user_info = action.payload;
    },
  },
});

export const { kakaoReducer } = kakaoSlice.actions;
