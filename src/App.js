import React, { Suspense, lazy } from "react";

import { Switch, Route, Redirect, NavLink } from "react-router-dom";

const HomePage = lazy(() => import("./components/HomePage/HomePage"));

const Phonebook = lazy(() => import("./components/phonebook/Phonebook.js"));

const Login = lazy(() => import("./components/Login/Login"));

const Register = lazy(() => import("./components/Register/Register.js"));

const App = () => {
  return (
    <div>
      <NavLink to="/" exact>
        Home
      </NavLink>
      <NavLink to="/contacts" exact>
        Contacts
      </NavLink>
      <NavLink to="/register" exact>
        Register
      </NavLink>
      <NavLink to="/login" exact>
        Login
      </NavLink>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/contacts" exact component={Phonebook} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />

          <Redirect to="/" />
        </Switch>
      </Suspense>
    </div>
  );
};

export default App;
