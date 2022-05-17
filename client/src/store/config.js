import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { colorSlice } from "./slice/color";
import { kakaoSlice } from "./slice/kakaoReducer";
import { sublistSlice } from "./slice/sublist";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage/session";

const persistConfig = {
  key: "root",
  storage,
};

const reducers = combineReducers({
  color: colorSlice.reducer,
  kakao: kakaoSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: {
    persist: persistedReducer,
    sublist: sublistSlice.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});
