import React from "react";
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import TextInput from "../common/TextInput";
import CheckBox from "../common/CheckBox";
import './contactForm.css';

const ContactForm = ({
  contact,
  errors = {},
  onChange,
  onSave,
  saving = false  
}) => {
  return (
    <form onSubmit={onSave} className="form-background">
      <h2>{contact.id ? "Edit" : "Add"} Contact</h2>
      {errors.onSave && (
        <div className="alert alert-danger" role="alert">
          {errors.onSave}
        </div>
      )}
      <TextInput
        error={errors.fName}
        label="First name"
        name="fName"
        onChange={onChange}
        value={contact.fName}   
      />
      <TextInput
        error={errors.lName}
        label="Last name"
        name="lName"
        onChange={onChange}
        value={contact.lName}       
      />
      <TextInput
        error={errors.address}
        label="Address"
        name="address"
        onChange={onChange}
        value={contact.address}
      />
      <TextInput
        error={errors.phone}
        label="Phone"
        name="phone"
        onChange={onChange}
        value={contact.phone}
      />
      <TextInput
        error={errors.email}
        label="Email"
        name="email"
        onChange={onChange}
        type="email"
        value={contact.email}
      />
      {contact.id ? null : (
      <CheckBox
        error={errors.checkbox}  
        label="Agree on terms"
        name="checkbox"        
        onChange={onChange}              
      />
      )}
      <button type="submit" disabled={saving} className="btn btn-success">
        {saving ? "Saving..." : "Save"}
      </button>
      <Link to="/" className="btn btn-success" style={{marginLeft:"3%"}}>
        Cancel
      </Link>
    </form>
  );
};

ContactForm.propTypes = {
  contact: PropTypes.object.isRequired,
  errors: PropTypes.object,
  onChange: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  saving: PropTypes.bool
};

export default ContactForm;
