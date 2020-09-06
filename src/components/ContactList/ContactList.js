import React from "react";
import styles from "../ContactList/ContactList.module.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import fadeContact from "./fadeContact.module.css";
import { connect } from "react-redux";
import taskOperations from "../../redux/taskOperations/taskOperations";
import contactSelector from "../../redux/contactSelector/contactSelector";

const Contacts = ({ contacts, onRemove }) => {
  return (
    <>
      <div className={styles.form}>
        <h2 className={styles.title}>Contacts</h2>
        <TransitionGroup component="ul">
          {contacts.map((contact) => (
            <CSSTransition
              timeout={500}
              classNames={fadeContact}
              key={contact.id}
            >
              <li className={styles.contact_li}>
                <span className={styles.contact_name}>
                  {contact.name} -{contact.number}
                </span>

                <button
                  className={styles.contact_btn}
                  onClick={() => onRemove(contact.id)}
                >
                  Delete
                </button>
              </li>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  contacts: contactSelector.visibleContactSelector(state),
});
const mapDispatchToProps = { onRemove: taskOperations.deleteContact };

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
