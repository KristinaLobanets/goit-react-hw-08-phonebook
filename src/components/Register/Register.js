import React, { Component } from "react";
import styles from "./Register.module.css";
import { connect } from "react-redux";
import authOperation from "../../redux/taskOperations/authOperation";

class Register extends Component {
  state = {
    name: "",
    email: "",
    password: "",
  };

  handleEmail = (e) => {
    this.setState({ email: e.target.value });
  };

  handlePassword = (e) => {
    this.setState({ password: e.target.value });
  };

  handleName = (e) => {
    this.setState({ name: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password } = this.state;
    const newUser = { name, email, password };
    this.props.onRegistration(newUser);
    this.setState({ name: "", email: "", password: "" });
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
            onChange={(e) => this.handleName(e)}
            value={name}
          />
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
          <button>Registration</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = { onRegistration: authOperation.userRegistration };

export default connect(null, mapDispatchToProps)(Register);
