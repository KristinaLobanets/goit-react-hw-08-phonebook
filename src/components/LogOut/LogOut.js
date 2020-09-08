import React from "react";
import { connect } from "react-redux";
import authOperation from "../../redux/taskOperations/authOperation";

const LogOut = ({ name, onLogOut }) => {
  return (
    <div>
      <p>Hello {name}</p>
      <button onClick={onLogOut}>Log Out</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  name: state.auth.user.name,
});
const mapDispatchToProps = { onLogOut: authOperation.userLogOut };

export default connect(mapStateToProps, mapDispatchToProps)(LogOut);
