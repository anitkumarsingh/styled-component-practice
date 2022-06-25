import { useState, useEffect } from 'react';
import { PageLayout, Input, PasswordInput, Button } from 'components/common';
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
	.btn-alt{
		text-align: center;
		margin:14px 0;
	}
`;

let timer;
const Login = () => {
	const [formFields, setFormFields] = useState({ username: '', password: '' });
	const [loading, setLoading] = useState(false);

	const handleChange = (e) => {
		e.persist();
		setFormFields((s) => ({
			...s,
			[e.target.name]: e.target.value
		}));
	};

	const submitHandle = (e) => {
		e.preventDefault();
		setLoading(true);
		timer = setTimeout(() => {
			setLoading(false);
		}, 2000);
	};
	useEffect(() => {
		return () => {
			if (timer) {
				clearTimeout(timer);
			}
		};
	}, []);
	return (
		<>
			<PageLayout />
			<h1>Login</h1>
			<Forms onSubmit={submitHandle}>
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
					name='password'
				/>
				<Button large disabled={loading}>{loading ? 'Loading...': 'Login'}</Button>
				{!loading && (
					<>
						<div className='btn-alt'>Or</div>
						<Button secondary type="button">Register</Button>
					</>
				)}
			</Forms>
		</>
	);
};

export default Login;
