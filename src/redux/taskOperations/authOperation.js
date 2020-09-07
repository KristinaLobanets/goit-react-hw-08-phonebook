import axios from "axios";
import authactions from "../actions/authactions";
import Axios from "axios";

Axios.defaults.baseURL = "https://goit-phonebook-api.herokuapp.com";
const token = {
  set(token) {
    Axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unSet() {
    Axios.defaults.headers.common.Authorization = ``;
  },
};

const userRegistration = (credentials) => (dispatch) => {
  dispatch(authactions.registrationRequest());
  axios
    .post("/users/signup", credentials)
    .then((res) => {
      token.set(res.data.token);
      dispatch(authactions.registrationSuccess(res.data));
    })
    .catch((err) => {
      dispatch(authactions.registrationError(err));
    });
};

const userLogin = (credentials) => (dispatch) => {
  dispatch(authactions.loginRequest());
  axios
    .post("/users/login", credentials)
    .then((res) => {
      token.set(res.data.token);
      dispatch(authactions.loginSuccess(res.data));
    })
    .catch((err) => {
      dispatch(authactions.loginError(err));
    });
};

const userLogOut = () => (dispatch) => {
  dispatch(authactions.logOutRequest());
  axios
    .post("/users/logout")
    .then(() => {
      token.unSet();
      dispatch(authactions.logOutSuccess());
    })
    .catch((err) => {
      dispatch(authactions.logOutError(err));
    });
};

const getCurrentUser = (credentials) => (dispatch, getState) => {
  const {
    auth: { token: getingtoken },
  } = getState();
  if (!getingtoken) {
    return;
  }
  token.set(getingtoken);
  dispatch(authactions.getCurrentUserRequest());
  axios
    .get("/users/current", credentials)
    .then((res) => {
      dispatch(authactions.getCurrentUserSuccess(res.data));
    })
    .catch((err) => {
      dispatch(authactions.getCurrentUserError(err));
    });
};

export default { userRegistration, userLogin, userLogOut, getCurrentUser };
