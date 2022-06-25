import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';

const HeaderStyle = styled.header`
	height: 60px;
	width: 100%;
	box-sizing: border-box;
	display: flex;
	padding: 0 16px;
	background: #eeee;
	position: fixed;
	top: 0;
`;

const Menus = styled.nav`
	display: flex;
	position: relative;
	width: initial;
	margin: auto 0 auto auto;
	border-bottom: none;
	font-family: 'Open-sans';
	background: none;
	left: initial;
	top: initial;
`;
const Link = ({ isActive, children, ...props }) => {
	return <RouterLink {...props}>{children}</RouterLink>;
};

const StyledLink = styled(Link)`
	padding: 0 5px;
	text-align: center;
	text-decoration: none;
	margin: auto 0;
	font-weight: ${(p) => (p.isActive ? 'bold' : 'normal')};
`;
const Header = () => {
	return (
		<HeaderStyle>
			<Menus>
				<StyledLink to='/'>Home</StyledLink>
				<StyledLink to='/login' isActive>
					Login
				</StyledLink>
				<StyledLink to='/button'>Buttons</StyledLink>
			</Menus>
		</HeaderStyle>
	);
};
export default Header;
