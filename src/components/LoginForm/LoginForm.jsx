import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import css from "./LoginForm.module.css"
import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/auth/operations";

export default function LoginForm() {
    const nameFieldId = useId();
    const dispath = useDispatch();
    
    const handleSubmit = (values, actions) => {
        dispath(loginUser(values));
        actions.resetForm();
    }  

  return (
    <div>
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className={css.container}>
            <label htmlFor={`${nameFieldId}-email`}>Email</label>
            <Field className={css.field} type="email" name="email" id={`${nameFieldId}-email`} />
            <ErrorMessage name="email" component="div" />
            <label htmlFor={`${nameFieldId}-password`}>Password</label>
            <Field className={css.field}
              type="password"
              name="password"
              id={`${nameFieldId}-password`}
            />
            <ErrorMessage name="password" component="div" />
            <button className={css.btnSubmit} type="submit" disabled={isSubmitting}>
              Log In
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}