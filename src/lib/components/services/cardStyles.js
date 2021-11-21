import { css } from '@emotion/css';
import { COLORS, ELEVATIONS, FONTS, MEDIA_QUERIES } from '../../../styles/constants';

const { body, title } = FONTS;
const { dark, background } = COLORS;
const { mdLight } = ELEVATIONS;

export const Wrapper = css`
	display: flex;
	gap: 16px;
	flex-direction: column;
	align-items: flex-start;
	padding: 16px 24px;
	color: white;
	max-width: 295px;
	background: ${dark};
	border-radius: 4px;
	box-shadow: ${mdLight};
	order: 1;
	flex-grow: 0;
	${'' /* margin: 3rem 56px; */}
	color: #ffffff;
	border-radius: 4px;
	background: ${background.dark};

	${MEDIA_QUERIES.tabletUp} {
		width: 30%;
	}
`;

export const Head = css`
	display: flex;
	flex-direction: column;
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
	margin: 5px 0px;
	font-family: ${body};
`;

export const Btn = css`
	background: ${COLORS.primary};
	border: none;
	color: #ffffff;
	font-size: 1.6rem;
	padding: 8px 16px;
	border-radius: 4px;
	text-align: center;
	cursor: pointer;
	box-shadow: 0.5px 1px 1px hsl(246deg 9% 5% / 0.7);
	transition: all 0.3s ease-in-out;

	&:hover {
		box-shadow: 1px 2px 2px hsl(246deg 9% 5% / 0.333), 2px 4px 4px hsl(246deg 9% 5% / 0.333),
			3px 6px 6px hsl(246deg 9% 5% / 0.333);

		transform: scale(1.05);
	}
`;
