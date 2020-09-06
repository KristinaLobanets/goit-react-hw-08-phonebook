import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "./redusers/contactReducer";
import authReducer from "../redux/redusers/authReducer";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const authPersistConfig = { key: "auth", storage, whitelist: ["token"] };

export const store = configureStore({
  reducer: {
    tasks: contactReducer,
    auth: persistReducer(authPersistConfig, authReducer),
  },
});

export const persistor = persistStore(store);
