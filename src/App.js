import React, { Component, Suspense } from "react";
import { Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import { connect } from "react-redux";
import authOperation from "./redux/taskOperations/authOperation";
import routes from "./routes";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }
  render() {
    return (
      <>
        <div>
          <Header />
          <Suspense fallback={<h1>Loading...</h1>}>
            <Switch>
              {routes.map((route) =>
                route.private ? (
                  <PrivateRoute key={route.label} {...route} />
                ) : (
                  <PublicRoute
                    key={route.label}
                    {...route}
                    restricted={route.restricted}
                  />
                )
              )}
            </Switch>
          </Suspense>
        </div>
      </>
    );
  }
}

const mapDispatchToProps = { onGetCurrentUser: authOperation.getCurrentUser };

export default connect(null, mapDispatchToProps)(App);
