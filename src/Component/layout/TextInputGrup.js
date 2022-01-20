import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
//import { FormLabel } from "react-bootstrap";
//import { propTypes } from "react-bootstrap/esm/Image";

const TextInputGrup = ({
  label,
  name,
  value,
  placeholder,
  type,
  error,
  onChange,
}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        className={classnames(" form-control form-control-lg", {
          "is-invalid": error,
        })}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};
TextInputGrup.prototype = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  error: PropTypes.string,
};
TextInputGrup.defaultProps = {
  type: "text",
};
export default TextInputGrup;
