import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import * as contactActions from '../../redux/actions/contactActions';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import ContactList from './ContactList';
import { Redirect } from 'react-router-dom';
import Spinner from '../common/Spinner';
import { toast } from 'react-toastify';
import './contactsPage.css';

const ContactsPage = ({ actions, contacts, loading, ...props }) => {

  const [redirectToAddContactPage, setRedirectToAddContactPage] = useState(false);

  useEffect(() => {
    if(contacts.length === 0) {
      actions.loadContacts().catch(error => {
        alert("Loading contacts failed" + error);
      });
    }
  }, [props.contact]);

  const handleDeleteContact = (contact) => {
    toast.success("Contact deleted");
    actions.deleteContact(contact).catch(error => {
      toast.error("Delete failed. " + error.message, {autoClose: false});
    })
  }

    return (
      <div className="contacts-background">
        {redirectToAddContactPage && <Redirect to="/contact"/>}
        <h2>Contact list</h2>
        <p>If you would like to become part of our worldwide network, just press the below button Sign up.</p>
        {loading ?
        <Spinner/> : (
          <>
        <button
          style={{ marginBottom: 20 }}
          className="btn btn-success add-contact"
          onClick={() => setRedirectToAddContactPage(true)}
          >
            Sign up
        </button>
        { contacts.length === 0 ? (
          <h2>The contact list is empty.</h2>
        ):(  
        <ContactList 
          contacts={contacts}
          onDeleteClick={handleDeleteContact}
          />
        )}
        </>
        )}
      </div>
    );
}
ContactsPage.propTypes = {
  actions: PropTypes.object.isRequired,
  contact: PropTypes.object.isRequired,
  contacts: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => {
  return {
    contacts: state.contacts.map(contact => {
      return {
        ...contact,

      };
    }),
    loading: state.apiCallsInProgress > 0
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      loadContacts: bindActionCreators(contactActions.loadContacts, dispatch),
      deleteContact: bindActionCreators(contactActions.deleteContact, dispatch)
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactsPage);
