import React, { useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const HeaderStyle = styled.header`
	height: 60px;
	width: 100%;
	box-sizing: border-box;
	display: flex;
	padding: 0 16px;
	background-image: linear-gradient(to right, ${p=>p.theme.primaryColor}, ${p=>p.theme.secondaryColor});
	position: fixed;
	top: 0;
	border-bottom: 3px solid ${p=>p.theme.secondaryColor};
`;

const MobileMenuIcon = styled.div`
	margin: auto 0 auto auto;
	width: 25px;
	min-width: 25px;
	padding: 5px;
	> div {
		height: 3px;
		background: black;
		margin: 5px 0;
		width: 100%;
	}
	@media (min-width: 768px) {
		display: none;
	}
`;
const Menus = styled.nav`
	display: ${p=>p.open ? 'inline-grid':'none'};
	font-family: 'Open-sans';
	position: absolute;
	width: 100%;
	top: 60px;
	left: 0;
	padding: 8px;
	box-sizing: border-box;
	border-bottom: 3px solid ${p=>p.theme.secondaryColor};
	background: white;

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
  const [menu,setMenu] = useState(false);
	const { pathname } = useLocation();
	return (
		<HeaderStyle>
			<MobileMenuIcon onClick={()=>setMenu(s=>!s)}>
				<div />
				<div />
				<div />
			</MobileMenuIcon>
			<Menus open={menu}>
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
