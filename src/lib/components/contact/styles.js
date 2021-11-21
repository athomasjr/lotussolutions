import { css } from '@emotion/css';
import { COLORS, FONTS, MEDIA_QUERIES } from '$styles/constants';

const { body } = FONTS;
const { background, primary } = COLORS;
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

export const Form = css`
	text-align: center;
	min-width: 100%;
	align-self: center;
	align-items: center;
	padding: 3rem;
	margin: 1rem;
	${MEDIA_QUERIES.tabletUp} {
		min-width: 70%;
	}
	${MEDIA_QUERIES.tabletLandUp} {
		min-width: 800px;
		grid-column: 1/3;
		grid-row: 2;
		justify-self: center;
		align-self: center;
	}
	${MEDIA_QUERIES.phoneOnly} {
		min-width: 90%;
	}
`;

export const Fields = css`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;

	& input {
		padding: 1rem;
		font-size: 18px;
		height: 40px;
		width: 100%;
		margin-bottom: 1rem;

		background-color: ${background.dark};
		color: #fff;
	}
	& textarea {
		padding: 1rem;
		font-size: 18px;
		width: 100%;
		min-height: 200px;
		background-color: ${background.dark};
		color: #fff;
	}
`;

export const Name = css`
	display: flex;

	width: 103%;
	& input {
		&:first-of-type {
			margin-right: 5%;
			${MEDIA_QUERIES.phoneOnly} {
				margin-right: 0;
			}
		}
		padding: 1rem;
		font-size: 18px;
		height: 40px;
		width: 100%;
		margin-bottom: 1rem;
	}
	${MEDIA_QUERIES.phoneOnly} {
		flex-wrap: wrap;
	}
`;

export const Btn = css`
	padding: 8px 16px;
	background-color: transparent;
	border: 1px solid ${primary};
	text-decoration: none;

	filter: $sm-dark;
	border-radius: 4px;
	order: 1;
	margin: 3rem 0;
	font-size: 16px;
	line-height: 28px;
	color: #2f2e38;
	&:disabled {
		border: 1px solid #000;
	}
`;

export const Error = css`
	font-size: 18px;
	color: ${primary};
`;

export const Message = css`
	padding: 2rem;
	background-color: rgba(0, 177, 106, 0.5);
	margin: 0 auto 1rem;
	font-size: 18px;
	font-family: ${body};
`;

export const MessageError = css`
	padding: 2rem;
	background-color: ${primary};
	margin: 0 auto 1rem;
	color: #fff;
	font-size: 18px;
	font-family: ${body};
`;
