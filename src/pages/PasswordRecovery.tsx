import React from 'react';
import { Formik, Field, Form, FormikHelpers } from 'formik';
import {useNavigate} from 'react-router-dom'
import '../styles/PasswordRecovery.css';

interface Values {
	email: string;
  }



const PasswordRecovery = () => {
  const navigate = useNavigate();
	return (
		<div className="PasswordRecovery">
			<div className="PasswordRecovery-container">
				<h1 className="title">Password recovery</h1>
				<p className="subtitle">Inform the email address used to create your account</p>
				<Formik
        initialValues={{
          email: ''
        }}
        onSubmit={(
          values: Values,
          { setSubmitting }: FormikHelpers<Values>
        ) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
            navigate("/send-email");
          }, 500);
        }}
      >
        <Form className="form" >
		<label htmlFor="email" className="label">Email address</label>
          <Field id="email" name="email" placeholder="platzi@example.com" type="email" className="input input-email"/>


          <button type="submit" className="primary-button login-button">Confirm</button>
        </Form>
      </Formik>
			</div>
		</div>
	);
}

export default PasswordRecovery;
