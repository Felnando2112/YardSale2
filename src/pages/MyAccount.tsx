import React,{useContext,useEffect,useState} from 'react';
import { Formik, Field, Form, FormikHelpers } from 'formik';
import AppContext from '../context/AppContext';
import {useNavigate} from 'react-router-dom';
import '../styles/MyAccount.css';


interface Values {
	username: string;
	email: string;
	password: string;
  }


const MyAccount = () => {


	const {state,getUser,createUser,removeUser} = useContext(AppContext);
	const [editState, setEditState] = useState(false);
	const navigate = useNavigate();

	const handleEditState = () => {
		setEditState(!editState);
	}

	const handleLogOut = () => {
		removeUser();
		navigate("/YardSale");
	}


	useEffect(() => {
		getUser();
	},[]);

	return (
		<div className="MyAccount">
			<div className="MyAccount-container">
				<h1 className="title">My account</h1>
				{ editState ? 
				<Formik 
				initialValues={{
					username: state.user.username,
					email: state.user.email,
					password: state.user.password,
				  }}
				  onSubmit={(
					values: Values,
					{ setSubmitting }: FormikHelpers<Values>
				  ) => {
					setTimeout(() => {
						createUser(values);
						setSubmitting(false);
						setEditState(!editState);
					}, 500);
				  }}>
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

          				<button type="submit" className="primary-button login-button">Edit</button>
        			</Form>
				</Formik>
				:
				<form action="/" className="form">
					<div>
						<label htmlFor="name" className="label">Name</label>
						<p className="value">{state.user.username}</p>
						<label htmlFor="email" className="label">Email</label>
						<p className="value">{state.user.email}</p>
						<label htmlFor="password" className="label">Password</label>
						<p className="value">{state.user.password}</p>
					</div>
					<input type="submit" value="Edit" className="secondary-button login-button" onClick={handleEditState}/>
					<input type="submit" value="Log Out" className="secondary-button login-button" onClick={handleLogOut}/>
				</form>}
			</div>
		</div>
	);
}

export default MyAccount;
