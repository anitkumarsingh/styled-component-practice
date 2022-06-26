import React from 'react';
import styled from 'styled-components';

const ToggleWrapper = styled.div`
	width: 40px;
	min-width: 25px;
	border: 1px solid ${(p) => p.theme.primary};
	border-radius: 25px;
	background-image: linear-gradient(
		to bottom,
		${(p) => p.theme.primaryColor},
		${(p) => p.theme.secondaryColor}
	);
	display: flex;
`;

const Notch = styled.div`
	height: 21px;
	width: 21px;
	border: 1px solid #666;
	border-radius: 50%;
	background: white;
	transition: transform 0.1s linear;
	transform: translate(${(p) => (p.isActive ? '21px' : '1px')});
`;
export const Toggle = ({ isActive,onToggle }) => {
	return (
		<ToggleWrapper onClick={onToggle}>
			<Notch isActive={isActive} />
		</ToggleWrapper>
	);
};
