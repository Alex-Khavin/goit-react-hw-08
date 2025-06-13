import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import css from "./RegistrationForm.module.css";
import { useDispatch } from "react-redux";
import { registerUser } from "../../redux/auth/operations";

export default function RegistrationForm() {
  const nameFieldId = useId();
  const dispath = useDispatch();

  const handleSubmit = (values, actions) => {
    dispath(registerUser(values));
    actions.resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        validate={(values) => {
          const errors = {};

          if (!values.name) {
            errors.name = "Required";
          }

          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }

          if (!values.password) {
            errors.password = "Required";
          } else if (values.password.length < 7) {
            errors.password = "Must be at least 7 characters";
          }

          return errors;
        }}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className={css.container}>
            <label htmlFor={`${nameFieldId}-name`}>Name</label>
            <Field
              className={css.field}
              type="text"
              name="name"
              id={`${nameFieldId}-name`}
            />
            <ErrorMessage name="name" component="div" />
            <label htmlFor={`${nameFieldId}-email`}>Email</label>
            <Field
              className={css.field}
              type="email"
              name="email"
              id={`${nameFieldId}-email`}
            />
            <ErrorMessage name="email" component="div" />
            <label htmlFor={`${nameFieldId}-password`}>Password</label>
            <Field
              className={css.field}
              type="password"
              name="password"
              id={`${nameFieldId}-password`}
            />
            <ErrorMessage name="password" component="div" />
            <button
              className={css.btnSubmit}
              type="submit"
              disabled={isSubmitting}
            >
              Register
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
