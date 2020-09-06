import { configureStore } from "@reduxjs/toolkit";
import contactReduser from "./redusers/contactReducer";

const store = configureStore({
  reducer: { tasks: contactReduser },
});

export default store;
