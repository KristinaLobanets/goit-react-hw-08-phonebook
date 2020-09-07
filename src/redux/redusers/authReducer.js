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

const token = createReducer(null, {
  [actionType.registrationSuccess]: (state, { payload }) => payload.token,
  [actionType.loginSuccess]: (state, { payload }) => payload.token,
  [actionType.logOutSuccess]: () => null,
});

const error = createReducer(null, {
  [actionType.registrationError]: (state, { payload }) => payload,
  [actionType.loginError]: (state, { payload }) => payload,
  [actionType.logOutError]: (state, { payload }) => payload,
  [actionType.getCurrentUserError]: (state, { payload }) => payload,
});

export default combineReducers({ user: user, token: token, error: error });
