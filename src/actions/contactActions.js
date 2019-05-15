//Import strings of each action type
import { GET_CONTACTS, DELETE_CONTACT, ADD_CONTACT } from './types';

//Action Creators
export const getContacts = () => {
  //return to reducer
  return {
    type: GET_CONTACTS
  };
};
export const deleteContact = id => {
  //return to reducer
  return {
    type: DELETE_CONTACT,
    payload: id
  };
};
export const addContact = contact => {
  //return to reducer
  return {
    type: ADD_CONTACT,
    payload: contact
  };
};
