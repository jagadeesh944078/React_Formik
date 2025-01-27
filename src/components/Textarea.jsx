import { ErrorMessage, Field } from "formik";
import React from "react";
import TextError from "./TextError";

const Textarea = (props) => {
  const { label, name, ...rest } = props;
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field as="textarea" name={name} label={label} {...rest} />
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default Textarea;
