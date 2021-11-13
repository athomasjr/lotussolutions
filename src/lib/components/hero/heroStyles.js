import heroImage from '$assets/hero-bg.jpeg';
import { COLORS, ELEVATIONS, MEDIA_QUERIES } from '$styles/constants';
import { css } from '@emotion/css';

export const BackgroundImg = css`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	background: url(${heroImage});
	background-size: cover;
	background-position: top center;
	background-repeat: no-repeat;
	height: 100vh;
	z-index: -1;

	${MEDIA_QUERIES.tabletLandUp} {
		height: calc(100vh + 100px);
	}
`;

export const Container = css`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 0 126px;
	height: 100vh;

	${MEDIA_QUERIES.desktopUp} {
		display: grid;
		grid-template-columns: 1fr 1fr;
		padding: -0 102px;
	}
`;

export const Svg = css`
	img {
		width: 100%;
	}

	${MEDIA_QUERIES.tabletUp} {
		width: 50%;
	}
	${MEDIA_QUERIES.desktopUp} {
		width: 100%;
		align-self: end;
	}
`;

export const Content = css`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 16px;
	text-align: center;
	margin-bottom: 32px;
	padding: 32px 0;
	width: 75%;
	h1 {
		font-size: 2.4rem;
		color: #ffffff;
	}

	h2 {
		color: ${COLORS.text};
		font-weight: 400;
	}

	${MEDIA_QUERIES.tabletUp} {
		width: 55%;
		gap: 32px;
		h1 {
			font-size: 3.2rem;
		}
		h2 {
			font-size: 2.4rem;
		}
	}

	${MEDIA_QUERIES.tabletLandUp} {
		width: 40%;
	}
	${MEDIA_QUERIES.desktopUp} {
		width: 100%;
		text-align: left;
		margin: -245px 0 0 0;
		h1 {
			font-size: 7rem;
		}
		h2 {
			font-size: 3.2rem;
		}
	}
`;

export const CTA = css`
	display: inline-block;
	background: ${COLORS.primary};
	font-size: 1.6rem;
	padding: 12px 16px;
	border-radius: 4px;
	width: 100%;
	color: #ffffff;
	box-shadow: ${ELEVATIONS.smDark};
	transition: 0.3s;

	&:hover {
		box-shadow: ${ELEVATIONS.mdDark};
		transform: scale(1.05);
	}
	${MEDIA_QUERIES.desktopUp} {
		width: auto;
		align-self: start;
		width: 40;
	}
`;
