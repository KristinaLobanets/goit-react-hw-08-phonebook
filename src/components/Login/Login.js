import React, { Component } from "react";
import styles from "./Login.module.css";

class Login extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = () => {};

  handleSubmit = (e) => {
    e.preventDefault();
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
            onChange={this.handleChange}
            value={email}
          />
          <input
            type="password"
            placeholder="password"
            name="password"
            onChange={this.handleChange}
            value={password}
          />
          <button>LogIn</button>
        </form>
      </div>
    );
  }
}

export default Login;
