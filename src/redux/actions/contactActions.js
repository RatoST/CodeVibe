import * as types from './actionTypes';
import * as contactApi from '../../api/contactApi';
import { beginApiCall, apiCallError } from './apiStatusActions';

export function loadContactSuccess(contacts) {
  return { type: types.LOAD_CONTACTS_SUCCESS, contacts};
}

export function createContactSuccess(contact) {
  return { type: types.CREATE_CONTACT_SUCCESS, contact};
}

export function updateContactSuccess(contact) {
  return { type: types.UPDATE_CONTACT_SUCCESS, contact};
}

export function deleteContactOptimistic(contact) {
  return { type: types.DELETE_CONTACT_OPTIMISTIC, contact};
}

export function loadContacts() {
  return function (dispatch) {
    dispatch(beginApiCall());
    return contactApi.getContacts().then(contacts => {
      dispatch(loadContactSuccess(contacts));
    }).catch(error => {
      dispatch(apiCallError(error));
      throw error;
    })
  }
}

export function saveContact(contact) {
  //eslint-disable-next-line no-unused-vars
  return function(dispatch, getState) {
    dispatch(beginApiCall());
    return contactApi
      .saveContact(contact)
      .then(savedContact => {
        contact.id
        ? dispatch(updateContactSuccess(savedContact))
        : dispatch(createContactSuccess(savedContact));
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}

export function deleteContact(contact) {
  return function (dispatch) {
    dispatch(deleteContactOptimistic(contact));
    return contactApi.deleteContact(contact.id);
  };
}