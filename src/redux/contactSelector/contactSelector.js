import { createSelector } from "@reduxjs/toolkit";

const contactSelector = (state) => state.tasks.contacts;

const filterSelector = (state) => state.tasks.filter;

const visibleContactSelector = createSelector(
  [contactSelector, filterSelector],
  (contacts, filter) =>
    contacts.filter((item) =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    )
);

export default { visibleContactSelector, filterSelector, contactSelector };
