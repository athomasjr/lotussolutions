import { COLORS } from '$styles/constants';
import { css } from '@emotion/css';

export const Footer = css`
	background: ${COLORS.background.dark};
	color: #ffffff;
	padding: 24px;
	display: flex;
	flex-direction: column;
`;

export const Content = css`
	width: 55%;
	display: flex;
	flex-direction: column;
	h3 {
		font-size: 2.4rem;
	}

	span {
		color: ${COLORS.primary};
	}
`;

export const Resource = css`
	color: #ffffff;
	display: flex;
	flex-direction: column;
	h4 {
		font-size: 1.8rem;
		position: relative;

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
`;

export const ResourceLinks = css`
	display: flex;
	flex-direction: column;
	gap: 8px;
	list-style: none;
	padding: 0;

	li {
		font-size: 1.5rem;
	}
`;

export const Resources = css`
	display: flex;
	flex-wrap: wrap;
	gap: 16px;
`;
export const ContactInfo = css`
	display: flex;
	gap: 8px;
	align-items: center;
	p {
		margin: 0;
	}
`;
