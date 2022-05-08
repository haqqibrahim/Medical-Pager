import React, { useState } from 'react'
import Coookies from 'universal-cookie'
import axios from 'axios'

import signupImage from '../assets/signup.jpg';

const Auth = () => {
	const [isSignup, setisSignup] = useState(true)
	const handleChange = () => {

	}

	const switchMode = () => {
		setisSignup((previsSignup) => !previsSignup);
	}
	return (
		<div className="auth__form-container">
			<div className="auth__form-container_fields">
				<div className="auth__form-container_fields-content">
					<p>{isSignup ? 'Sign up' : 'Sign in'}</p>
					<form onSubmit={() => { }}>
						{isSignup && (
							<div className="auth__form-container_fields-content_input">
								<label htmlFor="fullName">Full Name</label>
								<input
									type="text"
									placeholder="Full Name"
									name='fullName'
									onChange={handleChange}
									required
								/>
							</div>
						)}
						<div className="auth__form-container_fields-content_input">
							<label htmlFor="userName">Username</label>
							<input
								type="text"
								placeholder="Username"
								name='username'
								onChange={handleChange}
								required
							/>
						</div>
						{isSignup && (
							<div className="auth__form-container_fields-content_input">
								<label htmlFor="phoneNumber">Phone Number</label>
								<input
									type="text"
									placeholder="Phone Number"
									name='phoneNumber'
									onChange={handleChange}
									required
								/>
							</div>
						)}
						{isSignup && (
							<div className="auth__form-container_fields-content_input">
								<label htmlFor="avatarURL">Avatar URL</label>
								<input
									type="text"
									placeholder="Avatar URL"
									name='avatarURL'
									onChange={handleChange}
									required
								/>
							</div>
						)}
						<div className="auth__form-container_fields-content_input">
							<label htmlFor="password">Password</label>
							<input
								type="password"
								placeholder="Password"
								name='password'
								onChange={handleChange}
								required
							/>
						</div>
						{isSignup && (
							<div className="auth__form-container_fields-content_input">
								<label htmlFor="confirmPassword">Confirm Password</label>
								<input
									type="password"
									placeholder="Confirm Password"
									name='confirmPassword'
									onChange={handleChange}
									required
								/>
							</div>
						)}

					</form>
					<div className="auth__form-container_fields-account">
						<p>
							{isSignup ?
								'Already have an account?' :
								'Don\'t have an account?'
							}
							<span onClick={switchMode}>
								{isSignup ? 'Sign in' : 'Sign up'}
							</span>
						</p>
					</div>
				</div>
			</div>
			<div className="auth__form-container_image">
				<img src={signupImage} alt="Sign in" />
			</div>
		</div>
	)
}

export default Auth