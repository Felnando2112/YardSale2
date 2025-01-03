import React from 'react';
import '../styles/SendEmail.css';
import email from '../assets/icons/email.svg'

const SendEmail = () => {
	return (
		<div className="SendEmail">
			<div className="form-container">
				<img src="./logos/logo_yard_sale.svg" alt="logo" className="logo" />
				<h1 className="title">Email has been sent!</h1>
				<p className="subtitle">Please check your inbox for instructions on how to reset the password</p>
				<div className="email-image">
					<img src={email} alt="email" />
				</div>
				<a href="/login" className="primary-button login-button">Login</a>
				<p className="resend">
					<span>Didn't receive the email?</span>
					<a href="/">Resend</a>
				</p>
			</div>
		</div>
	);
}

export default SendEmail;
