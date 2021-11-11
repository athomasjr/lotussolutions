import { css } from '@emotion/css';
import { FONTS, COLORS, ELEVATIONS } from '../../../styles/constants';

const { body, title } = FONTS;
const { dark } = COLORS;
const { mdDark } = ELEVATIONS;

export const Wrapper = css`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: 16px 24px;
	color: white;
	max-width: 295px;
	background: ${dark};
	box-shadow: ${mdDark};
	border-radius: 4px;
	order: 1;
	flex-grow: 0;
	margin: 8px 56px;
	@media (max-width: 999px) {
		max-width: 250px;
	}
	@media (max-width: 599px) {
		margin: 8px 5px;
	}
`;

export const Head = css`
	display: flex;
	flex-direction: column;
	order: 1;
	flex: none;
	flex-grow: 0;
	margin: 15px 0px 0px 0px;
	& h2 {
		font-family: ${title};
		font-weight: 500;
		font-size: 24px;
		line-height: 28px;
		order: 1;
		margin: 24px 0px;
	}
	& img {
		height: 60px;
		width: 60px;
	}
`;

export const Description = css`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	font-size: 18px;
	line-height: 21px;
	margin: 24px 0px;
	font-family: ${body};
	order: 2;
`;

export const Points = css`
	font-family: $body;
	margin: 24px 0px;
	order: 3;
	font-size: 18px;
	line-height: 21px;
	& div {
		margin: 12px 0;
	}
`;
