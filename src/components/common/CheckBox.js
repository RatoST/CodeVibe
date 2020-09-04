import React from "react";
import PropTypes from "prop-types";

const CheckBox = ({ name, label, onChange, required, error }) => {
  let wrapperClass = "form-group";
  if (error && error.length > 0) {
    wrapperClass += " " + "has-error";
  }

  return (
    <div className={wrapperClass}>      
      <div className="form-check">
        <input
          type="checkbox"
          name={name}
          className="form-check-input"
          required={required}
          onChange={onChange}
        />
        <label htmlFor={name} className="form-check-label">{label}</label>
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  );
};

CheckBox.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string
};

export default CheckBox;
