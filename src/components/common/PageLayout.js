import React from 'react';
import styled from 'styled-components';
import Header from './Header';

const Contents = styled.main`
	max-width: 800px;
	margin: 80px auto 0 auto;
	padding: 0 16px;
	box-sizing: border-box;
	font-family: 'Open-Sans';
   h1, h2, h3, h4, h5, h6 {
		font-family: 'Kaushan script';
	}
`;

const PageLayout = ({ children }) => {
	return (
		<>
			<Header />
			<Contents>{children}</Contents>
		</>
	);
};

export default PageLayout;
