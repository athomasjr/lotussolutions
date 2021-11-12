import { css } from '@emotion/css';
import { COLORS, FONTS } from '../../../styles/constants';

const { body, title } = FONTS;
const { primary } = COLORS;
// Main Grid
export const Container = css`
	min-height: 100vh;
	display: grid;
	grid-auto-columns: 1fr;
	grid-template-columns: repeat(5, 1fr);
	grid-template-rows: repeat(auto-fit, 1fr);
	gap: 0px 0px;
	${'' /* background: linear-gradient(90deg, #ece9e6 -1.11%, #ffffff 100%); */}
	${'' /* box-shadow: 0px 4px 4px rgba(47, 46, 56, 0.25); */}
`;

// Header area
export const Header = css`
	grid-column: 1/5;
	grid-row: 1;
	justify-self: center;
	align-self: center;
	@media (max-width: 1200px) {
		padding: 16px;
	}
	@media (max-width: 899px) {
		padding: 8px;
		grid-column: 1/6;
	}
	@media (max-width: 599px) {
		grid-column: 1/7;
	}
`;

export const Description = css`
	font-family: ${body};
	font-size: 18px;
	line-height: 21px;
	max-width: 486px;
	margin-top: 16px;
	@media (max-width: 899px) {
		margin-top: 1.5rem;
	}
	@media (max-width: 599px) {
		font-size: 14px;
		margin-top: 1.5rem;
	}
`;
// BTN Explore more
export const Explore = css`
	grid-column: 4/7;
	grid-row: 1;
	justify-self: center;
	align-self: center;
	@media (max-width: 899px) {
		justify-self: flex-end;
	}
	@media (max-width: 599px) {
		grid-column: 3/7;
	}
`;

export const Btn = css`
	padding: 12px 16px;
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
	grid-column: 1/7;
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
	grid-column: 1/7;
	grid-row: 3;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: start;
	& img {
		margin: 24px 8px;
	}
`;
