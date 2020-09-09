import React from "react";
import { connect } from "react-redux";
import authOperation from "../../redux/taskOperations/authOperation";
import styles from "./LogOut.module.css";

const LogOut = ({ name, onLogOut }) => {
  return (
    <div className={styles.logout}>
      <button className={styles.logoutbtn} onClick={onLogOut}>
        Log Out
      </button>
      <p className={styles.logoutname}>Hello {name}</p>
    </div>
  );
};

const mapStateToProps = (state) => ({
  name: state.auth.user.name,
});
const mapDispatchToProps = { onLogOut: authOperation.userLogOut };

export default connect(mapStateToProps, mapDispatchToProps)(LogOut);
