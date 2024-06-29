import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";

const RegisterForm = () => {
  const options = [
    { key: "Email", value: "emailmoc" },
    { key: "Telephone", value: "telephonemoc" },
  ];

  const initialValues = {
    email: "",
    password: "",
    confirmPassword: "",
    modeOfContact: "",
    phoneNumber: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid Email Format").required("Required"),
    password: Yup.string().required("Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), ""], "Passwords must watch")
      .required("Required"),
    modeOfContact: Yup.string().required("Required"),
    phoneNumber: Yup.string().when("modeOfContact", {
      is: "telephonemoc",
      then: () => Yup.string().required("Required"),
    }),
  });

  const onSubmit = (values) => {
    console.log("form values", values);
  };

  return (
    <div className="form-control">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => {
          return (
            <Form>
              <FormikControl
                control="input"
                type="email"
                name="email"
                label="E-mail"
              />
              <FormikControl
                control="input"
                type="password"
                name="password"
                label="Password"
              />
              <FormikControl
                control="input"
                type="password"
                name="confirmPassword"
                label="Confirm Password"
              />
              <FormikControl
                control="radio"
                type="text"
                name="modeOfContact"
                label="Mode Of Contact"
                options={options}
              />
              <FormikControl
                control="input"
                type="text"
                name="phoneNumber"
                label="Phone Number"
              />
              <button type="submit">Submit</button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default RegisterForm;
