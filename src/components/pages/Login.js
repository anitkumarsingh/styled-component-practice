import { useState } from 'react';
import { PageLayout, Input, PasswordInput } from 'components/common';
import styled from 'styled-components';

const Forms = styled.form`
	width: 100%;
	max-width: 400px;
	background: white;
	padding: 16px;
	box-sizing: border-box;
	border-radius: 4px;
	border: 2px solid #eeee;
	margin: auto 5px;
`;

const Login = () => {
	const [formFields, setFormFields] = useState({ username: '', password: '' });
	const handleChange = (e) => {
		e.persist();
		setFormFields((s) => ({
			...s,
			[e.target.name]: e.target.value
		}));
	};

	return (
		<>
			<PageLayout />
			<h1>Login</h1>
			<Forms>
				<Input
					onChange={handleChange}
					value={formFields.username}
					name='username'
					type='text'
					placeholder='Please enter username'
				/>
				<PasswordInput
					onChange={handleChange}
					value={formFields.password}
					name="password"
				/>
			</Forms>
		</>
	);
};

export default Login;
