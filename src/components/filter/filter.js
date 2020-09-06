import React from "react";
import styles from "./filter.module.css";
import { connect } from "react-redux";
import contactAction from "../../redux/actions/contactAction";
import contactSelector from "../../redux/contactSelector/contactSelector";

const Filter = ({ filter, onSearchContact }) => {
  return (
    <div className={styles.block}>
      <h2 className={styles.title}>Search</h2>

      <input
        className={styles.form}
        type="text"
        placeholder="search"
        value={filter}
        onChange={(e) => onSearchContact(e.target.value)}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  filter: contactSelector.filterSelector(state),
});
const mapDispatchToProps = { onSearchContact: contactAction.searchContact };

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
