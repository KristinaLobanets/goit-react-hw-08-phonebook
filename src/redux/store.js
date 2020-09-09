import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import contactReducer from "./redusers/contactReducer";
import authReducer from "../redux/redusers/authReducer";
import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const authPersistConfig = { key: "auth", storage, whitelist: ["token"] };

export const store = configureStore({
  reducer: {
    tasks: contactReducer,
    auth: persistReducer(authPersistConfig, authReducer),
  },
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export const persistor = persistStore(store);
