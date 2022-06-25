import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderStyle = styled.header`
	height: 40px;
	padding: 0 16px;
	background: #666;
	font-size: 16px;
	width: 100%;
	box-sizing: border-box;
	display: flex;
  position: fixed;
  top: 0;
`;

const Header = () => {
	return (
		<HeaderStyle>
			<Link to='/'>Home</Link>
			<Link to='/login'>Login</Link>
			<Link to='/button'>Buttons</Link>
		</HeaderStyle>
	);
};
export default Header;
