import { css } from '@emotion/css';
import { FONTS, MEDIA_QUERIES } from '../../../styles/constants';

const { body } = FONTS;
// Main Grid
// export const Container = css`
// 	display: flex;
// 	flex-direction: column;
// 	${MEDIA_QUERIES.tabletLandUp} {
// 		display: grid;
// 		grid-template-columns: 1fr 1fr;
// 		padding: -0 102px;
// 	}
// `;

export const HeaderContainer = css`
	display: flex;
	flex-direction: column;
	margin-bottom: 40px;

	${MEDIA_QUERIES.tabletUp} {
		flex-direction: row;
		margin-bottom: 48px;
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

// Cards
export const Services = css`
	display: flex;
	flex-direction: column;
	gap: 40px;
	align-items: center;

	${MEDIA_QUERIES.tabletUp} {
		justify-content: space-between;
		flex-direction: row;
		flex-wrap: wrap;
	}
	${MEDIA_QUERIES.tabletLandUp} {
		flex-wrap: nowrap;
	}
`;

// Slider
// export const Slider = css`
// 	grid-column: 1/3;
// 	grid-row: 3;
// 	display: flex;
// 	flex-direction: row;
// 	justify-content: center;
// 	align-items: start;
// 	& img {
// 		margin: 24px 8px;
// 	}
// `;
