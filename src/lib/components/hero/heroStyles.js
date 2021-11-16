import heroImage from '$assets/hero-bg.jpeg';
import { COLORS, ELEVATIONS, FONTS, MEDIA_QUERIES } from '$styles/constants';
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

	z-index: -1;
`;

export const Container = css`
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 100vh;
	justify-content: center;

	${MEDIA_QUERIES.desktopUp} {
		${'' /* height: 100vh; */}
		display: grid;
		grid-template-columns: 1fr 1fr;
		padding-bottom: 80px;
	}
`;

export const Svg = css`
	display: none;
	img {
		width: 100%;
	}

	${MEDIA_QUERIES.tabletUp} {
		display: block;
		width: 70%;
	}
	${MEDIA_QUERIES.tabletLandUp} {
		display: none;
	}

	${MEDIA_QUERIES.desktopUp} {
		width: 100%;
		display: block;
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
		font-size: 3.6rem;
		color: #ffffff;
	}

	h2 {
		font-size: 2rem;
		color: ${COLORS.text};
		font-weight: 400;
		font-family: ${FONTS.body};
	}

	${MEDIA_QUERIES.tabletUp} {
		width: 55%;
		gap: 32px;
		h1 {
			font-size: 5rem;
		}
		h2 {
			font-size: 2.5rem;
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
	width: 90%;
	max-width: 100%;
	color: #ffffff;
	box-shadow: ${ELEVATIONS.smDark};
	transition: 0.3s;

	&:hover {
		box-shadow: ${ELEVATIONS.mdDark};
		transform: scale(1.05);
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
