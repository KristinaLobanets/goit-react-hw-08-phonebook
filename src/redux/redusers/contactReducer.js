import actionType from "../actions/contactAction";
import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";

// const contacts = (state = [], { type, payload }) => {
//   switch (type) {
//     case actionType.addContact.type:
//       return [...state, payload.contacts];

//     case actionType.deleteContact.type:
//       return state.filter((contact) => contact.id !== payload);

//     default:
//       return state;
//   }
// };

const contacts = createReducer([], {
  [actionType.getContactSuccess]: (state, action) => action.payload,
  [actionType.deleteContactSuccess]: (state, action) =>
    state.filter((item) => item.id !== action.payload),
  [actionType.addContactSuccess]: (state, action) => [...state, action.payload],
});

const filter = createReducer("", {
  [actionType.searchContact]: (state, action) => action.payload,
});

export default combineReducers({ contacts: contacts, filter: filter });
