import { COLORS } from '$styles/constants';
import { css } from '@emotion/css';

export const Header = css`
	position: sticky;
	top: 0;
	padding: 16px 126px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	z-index: 1;
`;

export const Nav = css`
	font-size: 1.6rem;

	ul {
		display: flex;
		gap: 48px;
		padding: 0;
	}

	li {
		list-style: none;
		color: #ffffff;
		font-weight: 600;
		position: relative;
		transition: 0.4s;

		&:hover {
			&:after {
				width: 100%;
			}
		}
		&:after {
			content: '';
			position: absolute;
			background-color: ${COLORS.primary};
			height: 3px;
			width: 0;
			left: 0;
			bottom: -2px;
			transition: 0.3s;
		}
	}
`;

export const CTA = css`
	background: ${COLORS.primary};
	font-size: 1.6rem;
	padding: 12px 16px;
	border-radius: 4px;
	color: #ffffff;
	box-shadow: 0.5px 1px 1px hsl(272 6% 20% / 0.7);
	transition: 0.3s;
	${'' /* 272,6%,33% */}

	&:hover {
		box-shadow: 1px 2px 2px hsl(272 6% 20%/ 0.333), 2px 4px 4px hsl(272 6% 20%/ 0.333),
			3px 6px 6px hsl(272 6% 20%/ 0.333);
		transform: scale(1.05);
	}
`;
