import { createAction } from "@reduxjs/toolkit";
// import { v4 as uuidv4 } from "uuid";

// const addContact = createAction(ADD_CONTACT, (taskName, taskPhone) => ({
//   payload: { contacts: { name: taskName, number: taskPhone, id: uuidv4() } },
// }));

const addContactRequest = createAction("@contacts/addRequest");

const addContactError = createAction("@contacts/addError");

const addContactSuccess = createAction("@contacts/addSuccess");

const deleteContactRequest = createAction("@contacts/deleteRequest");

const deleteContactError = createAction("@contacts/deleteError");

const deleteContactSuccess = createAction("@contacts/deleteSuccess");

const getContactRequest = createAction("@contacts/getRequest");

const geteContactError = createAction("@contacts/getError");

const getContactSuccess = createAction("@contacts/getSuccess");

const searchContact = createAction("@contact/filterContact");

// const removeTask = (taskid) => ({
//   type: DELETE_CONTACT,
//   payload: { id: taskid },
// });

export default {
  addContactRequest,
  addContactError,
  addContactSuccess,
  deleteContactRequest,
  deleteContactError,
  deleteContactSuccess,
  getContactRequest,
  geteContactError,
  getContactSuccess,
  searchContact,
};
