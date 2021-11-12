import { COLORS, ELEVATIONS, MEDIA_QUERIES } from '$styles/constants';
import { css } from '@emotion/css';

export const Header = css`
	${'' /* display: none; */}

	${MEDIA_QUERIES.desktopUp} {
		padding: 16px 126px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
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
		color: ${COLORS.text};
		position: relative;
		transition: 0.4s;

		&:hover {
			color: #ffffff;
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
	box-shadow: ${ELEVATIONS.smLight};
	transition: 0.3s;

	&:hover {
		box-shadow: ${ELEVATIONS.mdLight};
		transform: scale(1.05);
	}
`;
