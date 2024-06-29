import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";

const FormikContainer = () => {
  const dropdownValues = [
    { key: "Select an option", value: "" },
    { key: "Option 1", value: "option1" },
    { key: "Option 2", value: "option2" },
    { key: "Option 3", value: "option3" },
  ];
  const radioOptions = [
    { key: "Option 1", value: "rOption1" },
    { key: "Option 2", value: "rOption2" },
    { key: "Option 3", value: "rOption3" },
  ];
  const checkboxOptions = [
    { key: "Option 1", value: "cOption1" },
    { key: "Option 2", value: "cOption2" },
    { key: "Option 3", value: "cOption3" },
  ];
  const initialValues = {
    email: "",
    description: "",
    selectOption: "",
    radioOption: "",
    checkboxOption: [],
    birthDate: null,
  };
  const validationSchema = Yup.object({
    email: Yup.string().required("Required"),
    description: Yup.string().required("Required"),
    selectOption: Yup.string().required("Required"),
    radioOption: Yup.string().required("Required"),
    checkboxOption: Yup.array().min(1, "Required"),
    birthDate: Yup.date().required("Required"),
  });

  const onSubmit = (values) => {
    console.log("form values", values);
    console.log(JSON.parse(JSON.stringify(values)));
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        console.log(formik);
        return (
          <Form>
            <FormikControl
              control="input"
              name="email"
              label="E-mail"
              type="email"
            />
            <FormikControl
              control="textarea"
              name="description"
              label="Description"
            />
            <FormikControl
              control="select"
              name="selectOption"
              label="Select a topic"
              options={dropdownValues}
            />
            <FormikControl
              control="radio"
              name="radioOption"
              label="Radio Topic"
              options={radioOptions}
            />
            <FormikControl
              control="checkbox"
              label="Checkbox topics"
              name="checkboxOption"
              options={checkboxOptions}
            />
            <FormikControl
              control="date"
              label="Pick a date"
              name="birthDate"
            />
            <button type="submit">Submit</button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default FormikContainer;
