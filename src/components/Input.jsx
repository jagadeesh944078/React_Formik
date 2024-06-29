import { ErrorMessage, Field } from "formik";
import TextError from "./TextError";

const Input = (props) => {
  const { label, name, ...rest } = props;
  return (
    <div className="form-controller">
      <label htmlFor={name}>{label}</label>
      <Field name={name} id={name} {...rest} />
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default Input;
