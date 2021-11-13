import { css } from '@emotion/css';
import { FONTS, COLORS, ELEVATIONS, MEDIA_QUERIES } from '$styles/constants';

const { body, title } = FONTS;
const { dark, primary } = COLORS;
const { mdDark } = ELEVATIONS;

export const Container = css`
	display: grid;
	${MEDIA_QUERIES.desktopUp} {
		display: grid;
		grid-template-columns: 1fr 1fr;
		padding: -0 102px;
	}
	background: linear-gradient(90deg, #ece9e6 -1.11%, #ffffff 100%);
	box-shadow: 0px 4px 4px rgba(47, 46, 56, 0.25);
`;

// Header area
export const Header = css`
	grid-column: 1/3;
	grid-row: 1;
	justify-self: flex-start;
	align-self: center;
	${MEDIA_QUERIES.desktopUp} {
		padding: 16px;
	}
	${MEDIA_QUERIES.tabletLandUp} {
		padding: 8px;
	}
`;

export const Border = css`
	border: 2px solid #2f2e38;
	padding: 5px;
`;

export const Person1 = css`
	grid-column: 1/3;
	grid-row: 3;
	display: flex;
	flex-wrap: wrap;
	margin: 3rem 3rem 0 3rem;
	${MEDIA_QUERIES.phoneOnly} {
		justify-content: center;
		margin: 0;
	}
	${MEDIA_QUERIES.tabletUp} {
		justify-content: center;
		margin: 0;
	}
	${MEDIA_QUERIES.tabletLandUp} {
		justify-content: flex-start;
	}
`;
export const Info = css`
	order: 1 !important;
	margin: 3rem;
	${MEDIA_QUERIES.tabletUp} {
		order: 0 !important;
	}
`;

export const Person2 = css`
	grid-column: 1/3;
	grid-row: 4;
	display: flex;
	flex-wrap: wrap;
	justify-content: flex-end;
	margin: 0 3rem 3rem 3rem;
	${MEDIA_QUERIES.phoneOnly} {
		justify-content: center;
		margin: 0;
	}
	${MEDIA_QUERIES.tabletLandUp} {
		place-self: flex-end;
	}
	${MEDIA_QUERIES.tabletUp} {
		justify-content: center;
		margin: 0;
	}
`;

export const Founder = css`
	width: 250px;
	height: 250px;
	border: double 1em transparent;
	border-radius: 50%;
	background-image: linear-gradient(white, white),
		linear-gradient(90deg, #ff416c 0%, #ff4b2b 97.49%);
	background-origin: border-box;
	background-clip: content-box, border-box;
	position: relative;
	margin: 1.5rem;
`;

export const Face = css`
	width: 280px;
	margin-left: -0.8rem;
	margin-top: 10%;
`;

export const Name = css`
	font-family: ${title};
	font-size: 32px;
`;

export const Title = css`
	font-family: ${title};
	font-size: 24px;
	color: ${primary};
`;

export const Description = css`
	max-width: 490px;
	font-family: ${body};
`;

export const Button = css`
	background: linear-gradient(90deg, #ff416c 2.28%, #ff4b2b 100%);
	border-radius: 4px;
	border: none;
	padding: 8px 16px;
	font-size: 16px;
	color: #fff;
`;

export const Story = css`
	grid-column: 1/3;
	grid-row: 2;
	place-self: center;
	font-size: 16px;
	font-family: ${body};
	margin: 1rem;

	margin-bottom: 3rem;
`;
