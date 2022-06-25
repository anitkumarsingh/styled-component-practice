import React, { useState } from 'react';
import styled from 'styled-components';
import { Input } from './Input';

const Password = styled(Input).attrs(() => ({
	type: 'password',
	placeholder: 'Password'
}))`
	border-top-right-radius: 0;
	border-bottom-right-radius: 0;
`;

const PasswordWrapper = styled.div`
	display: flex;
	~div{
		margin-bottom: 4px;
	}
`;

const ToggleButton = styled.div`
	height: 40px;
	border: 2px solid #ccc;
	border-left: none;
	border-top-right-radius: 4px;
	border-bottom-right-radius: 4px;
	padding: 2px 8px;
	font-size: 0.9em;
	display: flex;
	background: white;
	cursor: pointer;
	user-select: none;
	font-weight: bold;
	color: black;
	align-items: center;
`;

const PasswordInput = (props) => {
	const [togglePassword, setTogglePassword] = useState(false);
	console.log('pass', props);
	return (
		<>
			<PasswordWrapper>
				<Password {...props} />
				<ToggleButton onClick={() => setTogglePassword((s) => !s)}>
					{togglePassword ? 'Hide' : 'Show'}
				</ToggleButton>
			</PasswordWrapper>
			<div>{togglePassword ? props.value : null}</div>
		</>
	);
};

export { PasswordInput };
