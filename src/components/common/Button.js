import styled, { css } from 'styled-components';

const Button = styled.button`
	color: white;
	background: ${(props) => (props.secondary ? 'black' : '#f8049c')};
	font-weight: bold;
	${(props) =>
		props.large
			? css`
					padding: 10px;
					border-radius: 5px;
					font-size: 1.5em;
			  `
			: css`
					padding: 8px;
					border-radius: 4px;
					font-size: 1em;
			  `}
	box-shadow: none;
	border: none;

	display: block;
	width: 100%;
	&:disabled {
		color: #666;
		background: #f6f6f6;
	}
`;
export { Button };
