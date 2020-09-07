import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import * as contactActions from '../../redux/actions/contactActions';
import PropTypes from 'prop-types';
import ContactForm from './ContactForm';
import { newContact } from '../../../tools/mockData';
import { toast } from 'react-toastify';

const ManageContactPage = ({ contacts, history, loadContacts, saveContact, ...props }) => {
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

  const handleChange = (event) => {
    const { name, value } = event.target;
    setContact(prevContact => ({
      ...prevContact,
      [name]:name === "id" ? parseInt(value, 10) : value
    }));
  }

  const formIsValid = () => {
    const { fName, lName, address, phone, email, checkbox } = contact;
    const errors = {};
    if (!fName) errors.fName = "Required";
    if (!lName) errors.lName = "Required";
    if (!address) errors.address = "Required";
    if (!phone) {errors.phone = "Required"}
    else if (!phone.includes("+")){errors.phone = "Bad format"}
    if (!email) errors.email = "Required"
    else if (!email.includes("@")) errors.email = "Bad format"
    else if (!email.includes(".")) errors.email = "Bad format";
    if (!checkbox) errors.checkbox = "You need to accept terms";

    setErrors(errors);
    return Object.keys(errors).length === 0;
  }

  const handleSave = (event) => {
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
        <ContactForm
          contact={contact}
          errors={errors}
          onChange={handleChange}
          onSave={handleSave}
          saving={saving}
        />
   );
  }

ManageContactPage.propTypes = {
  contact: PropTypes.object.isRequired,
  contacts: PropTypes.array.isRequired,
  history: PropTypes.object.isRequired,
  loadContacts: PropTypes.func.isRequired,
  saveContact: PropTypes.func.isRequired
};

export function getContactBySlug(contacts, slug) {
  return contacts.find(contact => contact.slug === slug) || null;
}

 const mapStateToProps = (state, ownProps) => {
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

export default connect(mapStateToProps, mapDispatchToProps)(ManageContactPage);
