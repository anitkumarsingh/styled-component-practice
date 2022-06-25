import React from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const HeaderStyle = styled.header`
	height: 60px;
	width: 100%;
	box-sizing: border-box;
	display: flex;
	padding: 0 16px;
	background-image: linear-gradient(to right, #f8049c, #fdd54f);
	position: fixed;
	top: 0;
  border-bottom: 3px solid #fdd54f;
`;

const Menus = styled.nav`
	display: inline-grid;
	font-family: 'Open-sans';
	position: absolute;
	width: 100%;
	top: 60px;
	left: 0;
	padding: 8px;
	box-sizing: border-box;
  border-bottom: 3px solid #fdd54f;
  background:white ;

	@media (min-width: 768px) {
		display: flex;
		background: none;
		left: initial;
		top: initial;
    margin: auto 0 auto auto;
    border-bottom: none;
		position: relative;
		width: initial;
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
	const { pathname } = useLocation();
	return (
		<HeaderStyle>
			<Menus>
				<StyledLink to='/' isActive={pathname === '/'}>
					Home
				</StyledLink>
				<StyledLink to='/login' isActive={pathname === '/login'}>
					Login
				</StyledLink>
				<StyledLink to='/button' isActive={pathname === '/button'}>
					Buttons
				</StyledLink>
			</Menus>
		</HeaderStyle>
	);
};
export default Header;
