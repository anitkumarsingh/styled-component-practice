import React from 'react';
import { Link as RouterLink,useLocation } from 'react-router-dom';
import styled from 'styled-components';

const HeaderStyle = styled.header`
	height: 60px;
	width: 100%;
	box-sizing: border-box;
	display: flex;
	padding: 0 16px;
	background-image:linear-gradient(to right, #f8049c, #fdd54f);
	position: fixed;
	top: 0;
`;

const Menus = styled.nav`
	display: none;
	position: relative;
	width: initial;
	margin: auto 0 auto auto;
	border-bottom: none;
	font-family: 'Open-sans';
	background: none;
	left: initial;
	top: initial;
  @media(min-width: 768px) {
    display: flex;
  }
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
  const {pathname} =useLocation();
	return (
		<HeaderStyle>
			<Menus>
				<StyledLink to='/' isActive={pathname ==='/'}>Home</StyledLink>
				<StyledLink to='/login' isActive={pathname ==='/login'}>
					Login
				</StyledLink>
				<StyledLink to='/button' isActive={pathname ==='/button'}>Buttons</StyledLink>
			</Menus>
		</HeaderStyle>
	);
};
export default Header;
