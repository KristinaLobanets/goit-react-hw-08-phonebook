import React, { Suspense, lazy } from "react";
import Header from "./components/Header/Header";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Header />
    </div>
  );
};

export default App;
