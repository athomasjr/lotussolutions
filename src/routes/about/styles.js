import { css } from '@emotion/css';
import { FONTS, COLORS, ELEVATIONS } from '$styles/constants';

const { body, title } = FONTS;
const { dark, primary } = COLORS;
const { mdDark } = ELEVATIONS;

export const Container = css`
	min-height: 100vh;
	display: grid;
	grid-auto-columns: 1fr;
	grid-template-columns: repeat(auto-fit, 1fr);
	grid-template-rows: repeat(auto-fit, 1fr);
	gap: 5px;
	background: linear-gradient(90deg, #ece9e6 -1.11%, #ffffff 100%);
	box-shadow: 0px 4px 4px rgba(47, 46, 56, 0.25);
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
		grid-column: 1/7;
	}
	@media (max-width: 599px) {
		grid-column: 1/7;
	}
`;

export const Border = css`
	border: 2px solid #2f2e38;
	padding: 5px;
`;

export const Person1 = css`
	grid-column: 1/4;
	grid-row: 3;
	place-self: center;
`;
export const Person1Div = css`
	grid-column: 4/7;
	grid-row: 3;
	place-self: center;
`;

export const Person2Div = css`
	grid-column: 2/5;
	grid-row: 4;
	place-self: center;
`;

export const Person2 = css`
	grid-column: 5/8;
	grid-row: 4;
	place-self: center;
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
`;

export const Face = css`
	width: 280px;
	position: absolute;
	margin-left: auto;
	margin-right: auto;
	top: 10%;
	left: -1rem;
	right: 3;
	text-align: center;
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
	padding: 8px 16px;
	font-size: 16px;
	color: #fff;
`;

export const Story = css`
	grid-column: 2/7;
	grid-row: 2;
	place-self: center;
	font-size: 14px;
`;
