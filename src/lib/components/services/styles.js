import { css } from '@emotion/css';
import { COLORS, FONTS, MEDIA_QUERIES } from '../../../styles/constants';

const { body } = FONTS;
const { primary } = COLORS;
// Main Grid
export const Container = css`
	display: flex;
	flex-direction: column;
	${MEDIA_QUERIES.tabletLandUp} {
		display: grid;
		grid-template-columns: 1fr 1fr;
		padding: -0 102px;
	}
`;

// Header area
export const Header = css`
	grid-column: 1/3;
	grid-row: 1;
	justify-self: flex-start;
	align-self: center;
	${MEDIA_QUERIES.phoneOnly} {
		text-align: center;
	} ;
`;

export const Description = css`
	font-family: ${body};
	font-size: 18px;
	line-height: 21px;
	max-width: 486px;
	margin-top: 16px;
	${MEDIA_QUERIES.phoneOnly} {
		font-size: 14px;
		margin: 1rem 5px;
	}
`;
// BTN Explore more
export const Explore = css`
	justify-content: center;
	margin: auto;
	${MEDIA_QUERIES.tabletUp} {
		grid-column: 2/3;
		grid-row: 1;
		justify-self: flex-end;
		align-self: center;
	}
	${MEDIA_QUERIES.phoneOnly} {
		align-self: flex-start;
	}
`;

export const Btn = css`
	padding: 8px 12px;
	background-color: transparent;
	border: 1px solid ${primary};
	text-decoration: none;
	/* small shadow */

	filter: $sm-dark;
	border-radius: 4px;
	order: 1;
	margin: 0px 44px;
	font-size: 16px;
	line-height: 28px;
	color: #2f2e38;

	@media (max-width: 1200px) {
		padding: 5px;
	}
	@media (max-width: 899px) {
		font-size: 14px;
		padding: 5px;
	}
	@media (max-width: 599px) {
		font-size: 14px;
		padding: 5px;
	}
	@media (max-width: 320px) {
		display: none;
	}
`;

// Cards
export const Services = css`
	grid-column: 1/3;
	grid-row: 2;
	place-self: center;
	display: flex;
	flex-wrap: wrap;
	@media (max-width: 999px) {
		justify-content: center;
	}
	@media (max-width: 599px) {
		justify-content: center;
	}
`;

// Slider
export const Slider = css`
	grid-column: 1/3;
	grid-row: 3;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: start;
	& img {
		margin: 24px 8px;
	}
`;
