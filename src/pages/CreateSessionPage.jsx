import React from 'react';
import useAuth from '../hooks/useAuth.js';

const CreateSessionPage = ({ code }) => {
	const accessToken = useAuth(code);
	return (
		<div>
			Test
		</div>
	);
};

export default CreateSessionPage;