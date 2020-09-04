import React from "react";
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import TextInput from "../common/TextInput";
import './contactForm.css';

const ContactForm = ({
  contact,
  onSave,
  onChange,
  saving = false,
  errors = {}
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
        name="fName"
        label="First name"
        value={contact.fName}
        onChange={onChange}
        error={errors.title}
      />
      <TextInput
        name="lName"
        label="Last name"
        value={contact.lName}
        onChange={onChange}
        error={errors.title}
      />
      <TextInput
        name="address"
        label="Address"
        value={contact.address}
        onChange={onChange}
        error={errors.title}
      />
      <TextInput
        name="phone"
        label="Phone"
        value={contact.phone}
        onChange={onChange}
        error={errors.title}
      />
      <TextInput
        name="email"
        label="Email"
        value={contact.email}
        onChange={onChange}
        error={errors.title}
      />

      <button type="submit" disabled={saving} className="btn btn-success">
        {saving ? "Saving..." : "Save"}
      </button>
      <Link to="contacts" className="btn btn-success" style={{marginLeft:"3%"}}>
        Cancel
      </Link>
    </form>
  );
};

ContactForm.propTypes = {
  contact: PropTypes.object.isRequired,
  errors: PropTypes.object,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool
};

export default ContactForm;
