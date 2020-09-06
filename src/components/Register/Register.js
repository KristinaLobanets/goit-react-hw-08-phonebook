import React, { Component } from "react";
import styles from "./Register.module.css";

class Register extends Component {
  state = {
    name: "",
    email: "",
    password: "",
  };

  handleChange = () => {};

  handleSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    const { name, email, password } = this.state;
    return (
      <div>
        <form className={styles.Registerform} onSubmit={this.handleSubmit}>
          <input
            type="name"
            placeholder="name"
            name="name"
            onChange={this.handleChange}
            value={name}
          />
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
          <button>Register</button>
        </form>
      </div>
    );
  }
}

export default Register;
