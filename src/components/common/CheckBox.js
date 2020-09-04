import React from "react";
import PropTypes from "prop-types";

const CheckBox = ({ error, label, onChange, name }) => {
  let wrapperClass = "form-group";
  if (error && error.length > 0) {
    wrapperClass += " " + "has-error";
  }

  return (
    <div className={wrapperClass}>      
      <div className="form-check">
        <input
          className="form-check-input"
          name={name}
          onChange={onChange}
          type="checkbox"  
        />
        <label htmlFor={name} className="form-check-label">{label}</label>
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  );
};

CheckBox.propTypes = {
  error: PropTypes.string,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,  
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,  
};

export default CheckBox;
