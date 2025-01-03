import React  from 'react';
import { Formik, Field, Form, FormikHelpers } from 'formik';
import '../styles/NewPassword.css';

interface Values {
	password: string;
	password2: string;
  }


const NewPassword = () => {
	return (
		<div className="NewPassword">
			<div className="NewPassword-container">
				<h1 className="title">Create a new password</h1>
				<p className="subtitle">Enter a new password for yue account</p>
				<Formik
        initialValues={{
          password: '',
		  password2: ''
        }}
        onSubmit={(
          values: Values,
          { setSubmitting }: FormikHelpers<Values>
        ) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 500);
        }}
      >
        <Form className="form" >
		<label htmlFor="password" className="label">New Password</label>
          <Field id="password" name="password" placeholder="*********" type="password" className="input input-password"/>
		  <label htmlFor="password2" className="label">Again Password</label>
          <Field id="password2" name="password2" placeholder="*********" type="password" className="input input-password"/>

          <button type="submit" className="primary-button login-button">Confirm</button>
        </Form>
      </Formik>
			</div>
		</div>
	);
}

export default NewPassword;
