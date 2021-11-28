import heroImage from '$assets/herocustomer.png';
import { COLORS, MEDIA_QUERIES } from '$styles/constants';
import { css } from '@emotion/css';

export const BackgroundImg = css`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	background: url(${heroImage});
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	z-index: -1;
`;

export const Container = css`
	height: 100vh;
	padding: 16px;
	justify-items: center;
	display: grid;
	grid-template-columns: 3fr 1fr;

	${MEDIA_QUERIES.desktopUp} {
		padding: 0 126px;
		display: grid;
		grid-template-columns: 1fr 1fr;
		padding-bottom: 80px;
	}
`;

export const Content = css`
	margin-top: 56px;
	width: 85%;
	h1 {
		font-size: 2rem;
		color: #ffffff;
	}

	${MEDIA_QUERIES.tabletUp} {
		width: 75%;
		gap: 32px;
		h1 {
			font-size: 3.2rem;
		}
	}

	${MEDIA_QUERIES.tabletLandUp} {
		width: 50%;
	}
	${MEDIA_QUERIES.desktopUp} {
		width: 100%;
		text-align: left;
		h1 {
			font-size: 4rem;
		}
	}

	${MEDIA_QUERIES.bigDesktopUp} {
		h1 {
			font-size: 5.6rem;
		}
	}
`;

export const CTA = css`
	display: inline-block;
	background: ${COLORS.primary};
	font-size: 1.6rem;
	padding: 12px 16px;
	border-radius: 4px;
	width: 80%;
	max-width: 80%;
	color: #ffffff;
	box-shadow: 0.5px 1px 1px hsl(0 2% 40% / 0.7);
	transition: 0.3s;
	text-align: center;

	&:hover {
		box-shadow: 1px 2px 2px hsl(0 2% 40% / 0.333), 2px 4px 4px hsl(0 2% 40% / 0.333),
			3px 6px 6px hsl(0 2% 40% / 0.333);
		transform: scale(1.05);
		${'' /* 0,2%,51% */}
	}

	${MEDIA_QUERIES.tabletUp} {
		font-size: 1.8rem;
	}
	${MEDIA_QUERIES.desktopUp} {
		width: auto;
		align-self: start;
		width: 40;
	}
`;
