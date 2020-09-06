import { createAction } from "@reduxjs/toolkit";

const registrationRequest = createAction("@auth/registrationRequest");

const registrationError = createAction("@auth/registrationError");

const registrationSuccess = createAction("@auth/registrationSuccess");

const loginRequest = createAction("@auth/loginRequest");

const loginError = createAction("@auth/loginError");

const loginSuccess = createAction("@auth/loginSuccess");

const logOutRequest = createAction("@auth/logOutRequest");

const logOutError = createAction("@auth/logOutError");

const logOutSuccess = createAction("@auth/logOutSuccess");

const getCurrentUserRequest = createAction("@auth/getCurrentUserRequest");

const getCurrentUserError = createAction("@auth/getCurrentUserError");

const getCurrentUserSuccess = createAction("@auth/getCurrentUserSuccess");

export default {
  registrationRequest,
  registrationError,
  registrationSuccess,
  loginRequest,
  loginError,
  loginSuccess,
  logOutRequest,
  logOutError,
  logOutSuccess,
  getCurrentUserRequest,
  getCurrentUserError,
  getCurrentUserSuccess,
};
