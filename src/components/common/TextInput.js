import React from "react";
import PropTypes from "prop-types";

const TextInput = ({ error, label, onChange, name, placeholder, value }) => {
  let wrapperClass = "form-group";
  if (error && error.length > 0) {
    wrapperClass += " " + "has-error";
  }

  return (
    <div className={wrapperClass}>
      <label htmlFor={name}>{label}</label>
      <div className="field">
        <input
          className="form-control"       
          name={name}
          onChange={onChange}
          placeholder={placeholder}
          type="text"
          value={value}          
        />
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  );
};

TextInput.propTypes = {
  error: PropTypes.string,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,  
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,  
};

export default TextInput;
