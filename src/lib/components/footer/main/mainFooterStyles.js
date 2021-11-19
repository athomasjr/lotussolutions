import { COLORS } from '$styles/constants';
import { css } from '@emotion/css';

export const Footer = css`
	background: ${COLORS.background.dark};
	padding: 56px 102px;
	display: flex;
	gap: 24px;
`;

export const Content = css`
	display: flex;
	flex-direction: column;
	gap: 8px;
	width: 50%;

	h3 {
		color: #ffffff;
		font-size: 3.2rem;
		margin-bottom: 0;
	}

	span {
		color: ${COLORS.primary};
	}

	p {
		width: 60%;
		color: #ffffff;
		font-size: 1.8rem;
	}
`;

export const Resource = css`
	color: #ffffff;
	display: flex;
	flex-direction: column;
	h4 {
		font-size: 1.8rem;
		position: relative;
		display: inline-block;

		&:after {
			content: '';
			position: absolute;
			bottom: -8px;
			left: 0;
			height: 2px;
			width: 100%;
			background-color: ${COLORS.primary};
		}
	}
	ul {
		display: flex;
		gap: 8px;
		flex-direction: column;
		list-style: none;
		padding: 0;

		li {
			font-size: 1.5rem;
		}
	}
`;

export const ContactInfo = css`
	display: flex;
	gap: 8px;
	align-items: center;
	p {
		margin: 0;
	}
`;
