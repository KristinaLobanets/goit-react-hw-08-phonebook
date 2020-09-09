import React from "react";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div classNames={styles.home}>
      <h1 classNames={styles.hometitle}>Welcome to phonebook application!</h1>
    </div>
  );
};

export default Home;
