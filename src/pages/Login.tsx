import {useState} from 'react';
import { Formik, Field, Form, FormikHelpers } from 'formik';
import '../styles/Login.css';

interface Values {
	email: string;
	password: string;
  }

const Login = () => {

  const [toggleAlert,setToggleAlert] = useState(false);

	return (
		<div className="Login">
			<div className="Login-container">
			<Formik
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={(
          values: Values,
          { setSubmitting,setFieldValue }: FormikHelpers<Values>
        ) => {
          setTimeout(() => {
            console.log(values);
            setFieldValue('email', '');
            setFieldValue('password', '');
            setSubmitting(false);
            setToggleAlert(true);
          }, 500);
        }}
      >
        <Form className="form">
		<label htmlFor="email" className="label">Email address</label>
          <Field id="email" name="email" placeholder="platzi@example.com" type="email" className="input input-email"/>

          <label htmlFor="password" className="label">Password</label>
          <Field id="password" name="password" placeholder="*********" type="password" className="input input-password"/>

        {toggleAlert ? <p>Account not found, please create one</p> : null}

          <button type="submit" className="primary-button login-button">Log in</button>
		  <a href="/password-recovery">Forgot my password</a>	
        </Form>
      </Formik>
	  		<a href="/signup" className="secondary-button signup-button">Sign up</a>
			</div>
		</div>
	);
}
export default Login;
