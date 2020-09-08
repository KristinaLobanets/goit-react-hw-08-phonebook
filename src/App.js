import React, { Component } from "react";
import Header from "./components/Header/Header";
import { connect } from "react-redux";
import authOperation from "./redux/taskOperations/authOperation";

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }
  render() {
    return (
      <>
        <div>
          <Header />
        </div>
      </>
    );
  }
}

const mapDispatchToProps = { onGetCurrentUser: authOperation.getCurrentUser };

export default connect(null, mapDispatchToProps)(App);
