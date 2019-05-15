//Import strings of each action type
import { GET_CONTACTS, DELETE_CONTACT, ADD_CONTACT } from './types';
import axios from 'axios';
//Action Creators
export const getContacts = () => async dispatch => {
  const res = await axios.get('http://jsonplaceholder.typicode.com/users');

  dispatch({
    type: GET_CONTACTS,
    payload: res.data
  });
};
export const deleteContact = id => {
  return {
    type: DELETE_CONTACT,
    payload: id
  };
};
export const addContact = contact => {
  return {
    type: ADD_CONTACT,
    payload: contact
  };
};
