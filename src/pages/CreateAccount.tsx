import React,{useContext} from 'react';
import AppContext from '../context/AppContext';
import { Formik, Field, Form, FormikHelpers } from 'formik';
import '../styles/CreateAccount.css';
import {useNavigate} from 'react-router-dom'


interface Values {
	username: string;
	email: string;
	password: string;
  }


const CreateAccount = () => {
  const {createUser} = useContext(AppContext);
  const navigate = useNavigate();
	return (
		<div className="CreateAccount">
			<div className="CreateAccount-container">
				<h1 className="title">New account</h1>
					<Formik
        initialValues={{
          username: '',
          email: '',
          password: '',
        }}
        onSubmit={(
          values: Values,
          { setSubmitting }: FormikHelpers<Values>
        ) => {
          setTimeout(() => {
            createUser(values);
            setSubmitting(false);
            navigate("/YardSale");
          }, 500);
        }}
      >
        <Form className="form">
		<label htmlFor="username" className="label">Username</label>
          <Field id="username" name="username" placeholder="Teff_15" type="text" className="input input-name"/>

          <label htmlFor="email" className="label">Email</label>
          <Field id="email" name="email" placeholder="platzi@example.com" type="email" className="input input-email"/>

          <label htmlFor="password" className="label">Password</label>
          <Field
            id="password"
            name="password"
            placeholder="**********"
            type="password"
			className="input input-password"
          />

          <button type="submit" className="primary-button login-button">Create</button>
        </Form>
      </Formik>
			</div>
		</div>
	);
}

export default CreateAccount;
