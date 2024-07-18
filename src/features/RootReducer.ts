import appSettingsReducer from "@/features/AppSettings/appSettingsSlice";
import { combineReducers } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import cartReducer from "../features/Cart/cartSlice";
import searchQueryReducer from "../features/SearchQuery/searchQuerySlice";
import snackbarReducer from "../features/Snackbar/snackbarSlice";
import userReducer from "../features/User/userSlice";

const persistedAppSettings = {
  key: "appSettings",
  storage,
};

const persistedAppSettingsReducer = persistReducer(
  persistedAppSettings,
  appSettingsReducer
);

const RootReducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
  snackbar: snackbarReducer,
  searchQuery: searchQueryReducer,
  appSettings: persistedAppSettingsReducer,
});

export default RootReducer;
