import React from 'react';
import { connect } from 'react-redux';
import * as contactActions from '../../redux/actions/contactActions';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import ContactList from './ContactList';
import { Redirect } from 'react-router-dom';
import Spinner from '../common/Spinner';
import { toast } from 'react-toastify';
import './contactsPage.css';

class ContactsPage extends React.Component {

  state = {
    redirectToAddcontactPage: false
  };

  componentDidMount() {
    if (this.props.contacts.length === 0) {
      this.props.actions.loadContacts().catch(error => {
        alert("Loading contacts failed" + error);
      });
    }
  }

  handleDeleteContact = contact => {
    toast.success("Contact deleted");
    this.props.actions.deleteContact(contact).catch(error => {
      toast.error("Delete failed. " + error.message, { autoClose: false});
    });
  };

  render() {
    return (
      <div className="contacts-background">
        {this.state.redirectToAddContactPage && <Redirect to="/contact"/>}
        <h2>Contact list</h2>
        <p>If you would like to become part of our worldwide network, just press the below button Sign up.</p>
        {this.props.loading ?
        <Spinner/> : (
          <>
        <button
          style={{ marginBottom: 20 }}
          className="btn btn-success add-contact"
          onClick={() => this.setState({ redirectToAddContactPage: true })}
          >
            Sign up
          </button>
        <ContactList 
          contacts={this.props.contacts}
          onDeleteClick={this.handleDeleteContact}
          />
        </>
        )}
      </div>
    );
  }
}
ContactsPage.propTypes = {
  actions: PropTypes.object.isRequired,
  contacts: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    contacts: state.contacts.map(contact => {
      return {
        ...contact,

      };
    }),
    loading: state.apiCallsInProgress > 0
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadContacts: bindActionCreators(contactActions.loadContacts, dispatch),
      deleteContact: bindActionCreators(contactActions.deleteContact, dispatch)
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactsPage);
