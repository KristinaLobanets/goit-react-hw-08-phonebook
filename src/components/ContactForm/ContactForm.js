import React, { Component } from "react";
import styles from "./ContactForm.module.css";
import { connect } from "react-redux";
import taskOperation from "../../redux/taskOperations/taskOperations";
import contactSelector from "../../redux/contactSelector/contactSelector";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  handleName = (e) => {
    this.setState({ name: e.target.value });
  };

  handlNumber = (e) => {
    this.setState({ number: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, number } = this.state;
    if (this.props.contacts.find((item) => item.name === name)) {
      this.props.onError();
      this.setState({ name: "", number: "" });
    } else {
      this.props.onAddContacts(name, number);
      this.setState({ name: "", number: "" });
    }
  };

  render() {
    const { name, number } = this.state;
    return (
      <>
        <div className={styles.block}>
          <form onSubmit={this.handleSubmit} className={styles.form}>
            <label className={styles.label}>
              <span className={styles.name_form}> Name:</span>
              <input
                className={styles.input}
                type="text"
                name="name"
                placeholder="Your Name"
                value={name}
                onChange={this.handleName}
              ></input>
            </label>
            <label className={styles.label}>
              <span className={styles.name_form}> Number:</span>
              <input
                className={styles.input}
                type="text"
                name="number"
                placeholder="Your Number"
                value={number}
                onChange={this.handlNumber}
              ></input>
            </label>
            <button className={styles.button} type="submit">
              Add contact
            </button>
          </form>
        </div>
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  contacts: contactSelector.contactSelector(state),
});
const mapDispatchToProps = { onAddContacts: taskOperation.addContact };
export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
