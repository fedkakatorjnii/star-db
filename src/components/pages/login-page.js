import React from 'react';

const LoginPage = ({ isLoggedIn, onLogin }) => {

	const authorizationText = isLoggedIn ? 'Logout' : 'Login';

	return (
		<div className="jumbotron text-center">
			<p>Login to see select page!</p>
			<button 
				className="btn btn-primary"
				onClick={onLogin} >
				{authorizationText}
			</button>
		</div>
	);
};

export default LoginPage;