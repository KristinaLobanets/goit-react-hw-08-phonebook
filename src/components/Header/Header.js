import React, { Suspense, lazy } from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import LogOut from "../LogOut/LogOut";

const HomePage = lazy(() => import("../HomePage/HomePage.js"));

const Phonebook = lazy(() => import("../phonebook/Phonebook.js"));

const Login = lazy(() => import("../Login/Login"));

const Register = lazy(() => import("../Register/Register.js"));

const Header = () => {
  return (
    <div className={styles.Header}>
      <NavLink to="/" className={styles.HeaderLink} exact>
        <p className={styles.HeaderText}>Home</p>
      </NavLink>
      <NavLink to="/contacts" className={styles.HeaderLink} exact>
        <p className={styles.HeaderText}>Contacts</p>
      </NavLink>
      <NavLink to="/register" className={styles.HeaderLink} exact>
        <p className={styles.HeaderText}> Register</p>
      </NavLink>
      <NavLink to="/login" className={styles.HeaderLink} exact>
        <p className={styles.HeaderText}>Login</p>
      </NavLink>
      <LogOut />
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

export default Header;
