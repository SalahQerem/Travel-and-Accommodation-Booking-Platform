import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import appSettingsReducer from "@/features/AppSettings/appSettingsSlice";
import { configureStore } from "@reduxjs/toolkit";

const saferStore = configureStore({
  reducer: {
    appSettings: appSettingsReducer,
  },
});

export type RootState = ReturnType<typeof saferStore.getState>;

export type AppDispatch = typeof saferStore.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default saferStore;
