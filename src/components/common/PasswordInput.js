import React from 'react';
import styled from 'styled-components';
import { Input } from './Input';

const Password = styled(Input).attrs(() => ({
	type: 'password',
	placeholder: 'Password'
}))`
	border-top-right-radius: 0;
	border-bottom-right-radius: 0;
`;

const PasswordInput = (props) => {
  console.log('pass',props)
	return <Password {...props} />;
};

export { PasswordInput };
