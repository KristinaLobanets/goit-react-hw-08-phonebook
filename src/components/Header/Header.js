import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import LogOut from "../LogOut/LogOut";
import authSelectors from "../../redux/authSelectors/authSelectors";
import { connect } from "react-redux";

const Header = ({ isAuthenticated }) => {
  return (
    <div className={styles.Header}>
      <NavLink to="/" className={styles.HeaderLink} exact>
        <p className={styles.HeaderText}>Home</p>
      </NavLink>
      {isAuthenticated ? (
        <NavLink to="/contacts" className={styles.HeaderLink} exact>
          <p className={styles.HeaderText}>Contacts</p>
        </NavLink>
      ) : (
        <>
          <NavLink to="/register" className={styles.HeaderLink} exact>
            <p className={styles.HeaderText}> Register</p>
          </NavLink>
          <NavLink to="/login" className={styles.HeaderLink} exact>
            <p className={styles.HeaderText}>Login</p>
          </NavLink>
        </>
      )}
      <LogOut />
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: authSelectors.isAuthenticated(state),
});

export default connect(mapStateToProps)(Header);
