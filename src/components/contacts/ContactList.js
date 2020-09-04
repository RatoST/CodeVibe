import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ContactList = ({ contacts, onDeleteClick }) => (
  <table className="table">
    <thead>
      <tr>
        <th>First name</th>
        <th>Last name</th>
        <th>Address</th>
        <th>Phone</th>
        <th>Email</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {contacts.map(contact => {
        return (
          <tr key={contact.id}>
            <td>{contact.fName}</td>
            <td>{contact.lName}</td>
            <td>{contact.address}</td>
            <td>{contact.phone}</td>
            <td>{contact.email}</td>
            <td>
              <button
                className="btn btn-outline-danger"
                onClick={() => onDeleteClick(contact)}
                style={{marginRight:"5%"}}
              >
                Delete
              </button>
              <Link to={"/contact/" + contact.slug}>
              <button
                className="btn btn-outline-info"
              >
              Edit
              </button>
              </Link>
            </td>
          </tr>
        );
      })}
    </tbody>
  </table>
);

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteClick: PropTypes.func.isRequired
};

export default ContactList;
