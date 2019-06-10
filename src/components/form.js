import React from "react";
import { Field, reduxForm } from "redux-form";
import { submitHike } from "./../config/action";
const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div className="form-group">
    <label>{label}:</label>
    <div>
      <input
        {...input}
        className={"form-control " + (touched && error ? "is-invalid " : "")}
        placeholder={label}
        type={type}
      />
      {touched && error && <span className="text-danger">{error}</span>}
    </div>
  </div>
);
const renderSwitch = ({ input, label, type, meta: { touched, error } }) => (
  <div className="custom-control custom-checkbox form-group">
    <input
      type="checkbox"
      className="custom-control-input"
      id="customCheck"
      {...input}
    />
    <label className="custom-control-label" htmlFor="customCheck">
      {label}
    </label>
  </div>
);

const renderTextArea = ({ input, label, type, meta: { touched, error } }) => (
  <div className="form-group">
    <label>{label}:</label>
    <textarea className="form-control" {...input} rows="3" />
  </div>
);

const HikeForm = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field name="name" type="text" component={renderField} label="Name" />
      <Field
        name="elevation"
        type="number"
        step="any"
        min="0"
        component={renderField}
        label="Elevation (in meter)"
      />
      <Field name="date" type="date" component={renderField} label="Date" />
      <Field name="success" component={renderSwitch} label="Success" />
      <Field
        name="distance"
        type="number"
        component={renderField}
        step="any"
        label="Hike Distance (in kilometer)"
      />
      <Field
        name="gain"
        type="number"
        step="any"
        component={renderField}
        label="Gain (in meter)"
      />
      <Field name="notes" component={renderTextArea} label="Notes" />
    </form>
  );
};

export default reduxForm({
  form: "hikeform",
  onSubmit: submitHike("hikeform")
})(HikeForm);
