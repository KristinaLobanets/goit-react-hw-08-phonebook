import contactAction from "../actions/contactAction";
import axios from "axios";

const addContact = (name, number) => (dispatch) => {
  dispatch(contactAction.addContactRequest());
  axios
    .post("http://localhost:2000/contacts", { name: name, number: number })
    .then((res) => {
      dispatch(contactAction.addContactSuccess(res.data));
    })
    .catch((err) => {
      dispatch(contactAction.addContactError(err));
    });
};

const getContact = () => (dispatch) => {
  dispatch(contactAction.getContactRequest());
  axios
    .get("http://localhost:2000/contacts")
    .then((res) => {
      dispatch(contactAction.getContactSuccess(res.data));
    })
    .catch((err) => {
      dispatch(contactAction.geteContactError(err));
    });
};

const deleteContact = (id) => (dispatch) => {
  dispatch(contactAction.deleteContactRequest());
  axios
    .delete(`http://localhost:2000/contacts/${id}`)
    .then(() => dispatch(contactAction.deleteContactSuccess(id)))
    .catch((err) => {
      dispatch(contactAction.deleteContactError(err));
    });
};

export default { deleteContact, getContact, addContact };
