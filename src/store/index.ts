import { configureStore } from "@reduxjs/toolkit";
import { useSelector, useDispatch, TypedUseSelectorHook } from "react-redux";
import usersReducer from "./usersReducer";

const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});

// console.log(store.getState());

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
