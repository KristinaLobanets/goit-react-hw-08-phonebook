import actionType from "../actions/authactions";
import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";

const initialState = { name: null, email: null };

const user = createReducer(initialState, {
  [actionType.registrationSuccess]: (state, { payload }) => payload.user,
  [actionType.loginSuccess]: (state, { payload }) => payload.user,
  [actionType.getCurrentUserSuccess]: (state, { payload }) => payload,
  [actionType.logOutSuccess]: () => initialState,
});

// const contacts = createReducer([], {
//   [actionType.getContactSuccess]: (state, action) => action.payload,
//   [actionType.deleteContactSuccess]: (state, action) =>
//     state.filter((item) => item.id !== action.payload),
//   [actionType.addContactSuccess]: (state, action) => [...state, action.payload],
// });

export default combineReducers({ user: user });
