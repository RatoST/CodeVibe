// Section 1: Imports
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import * as contactActions from '../../redux/actions/contactActions';
import PropTypes from 'prop-types';
import ContactForm from './ContactForm';
import { newContact } from '../../../tools/mockData';
import Spinner from '../common/Spinner';
import { toast } from 'react-toastify';

// Section 2: Component
function ManageContactPage({ contacts, history, loadContacts, saveContact, ...props }) {
  const [ contact, setContact] = useState({ ...props.contact});
  const [errors, setErrors] = useState({});
  const [saving, setSaving] = useState(false);

  useEffect(() => {    
    if (contacts.length === 0) {
      loadContacts().catch(error => {
        alert("Loading contacts failed" + error);
      });
    } else {
      setContact({ ...props.contact });
    }
  }, [props.contact]);

  function handleChange(event) {
    const { name, value } = event.target;
    setContact(prevContact => ({
      ...prevContact,
      [name]:name === "id" ? parseInt(value, 10) : value
    }));
  }

  function formIsValid() {
    const { fName, lName, address, phone, email } = contact;
    const errors = {};
    if (!fName) errors.fName = "Required";
    if (!lName) errors.lName = "Required";
    if (!address) errors.address = "Required";
    if (!phone) errors.phone = "Required";
    if (!email) errors.email = "Required";

    setErrors(errors);
    // Form is valid if the errors object stil has no properties
    return Object.keys(errors).length === 0;
  }

  function handleSave(event) {
    event.preventDefault();
    if (!formIsValid()) return;
    setSaving(true);
    saveContact(contact).then( () => {
      toast.success('Contact saved.');
      history.push("/contacts");
    })
    .catch(error => {
      setSaving(false);
      setErrors({ onSave: error.message })
    });
  }

   return (
     contacts.length === 0 ? (
       <Spinner/>
      ) : (
        <ContactForm
          contact={contact}
          errors={errors}
          onChange={handleChange}
          onSave={handleSave}
          saving={saving}
        />
      )
   );
  }

// Section 3: PropTypes declaration
ManageContactPage.propTypes = {
  contact: PropTypes.object.isRequired,
  contacts: PropTypes.array.isRequired,
  history: PropTypes.object.isRequired,
  loadContacts: PropTypes.func.isRequired,
  saveContact: PropTypes.func.isRequired
};



// Section 4: Redux mappings

export function getContactBySlug(contacts, slug) {
  return contacts.find(contact => contact.slug === slug) || null;
}

function mapStateToProps(state, ownProps) {
  const slug = ownProps.match.params.slug;
  const contact = slug && state.contacts.length > 0 ? getContactBySlug(state.contacts, slug) : newContact;
  return {
    contact,
    contacts: state.contacts,
  };
}

const mapDispatchToProps = {
  loadContacts: contactActions.loadContacts,
  saveContact: contactActions.saveContact
}

//Section 5: Redux connect
export default connect(mapStateToProps, mapDispatchToProps)(ManageContactPage);
