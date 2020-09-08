import React, { Component } from "react";
import styles from "./Login.module.css";
import { connect } from "react-redux";
import authOperation from "../../redux/taskOperations/authOperation";

class Login extends Component {
  state = {
    email: "",
    password: "",
  };

  handleEmail = (e) => {
    this.setState({ email: e.target.value });
  };

  handlePassword = (e) => {
    this.setState({ password: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    const loginUser = { email, password };
    this.props.onLogin(loginUser);
    this.setState({ email: "", password: "" });
  };

  render() {
    const { email, password } = this.state;
    return (
      <div>
        <form className={styles.Loginform} onSubmit={this.handleSubmit}>
          <input
            type="email"
            placeholder="email"
            name="email"
            onChange={(e) => this.handleEmail(e)}
            value={email}
          />
          <input
            type="password"
            placeholder="password"
            name="password"
            onChange={(e) => this.handlePassword(e)}
            value={password}
          />
          <button>LogIn</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = { onLogin: authOperation.userLogin };

export default connect(null, mapDispatchToProps)(Login);
