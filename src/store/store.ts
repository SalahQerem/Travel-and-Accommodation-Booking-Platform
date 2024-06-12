import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import appSettingsReducer from "@/features/AppSettings/appSettingsSlice";
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistedAppSettings = {
  key: "appSettings",
  storage,
};

const persistedAppSettingsReducer = persistReducer(
  persistedAppSettings,
  appSettingsReducer
);

const saferStore = configureStore({
  reducer: {
    appSettings: persistedAppSettingsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(saferStore);

export type RootState = ReturnType<typeof saferStore.getState>;

export type AppDispatch = typeof saferStore.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default saferStore;
