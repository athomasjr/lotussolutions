import { COLORS, ELEVATIONS, FONTS, MEDIA_QUERIES } from '$styles/constants';
import { css } from '@emotion/css';

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
		min-width: 100%;
	}
	${MEDIA_QUERIES.tabletLandUp} {
		min-width: 800px;
		${'' /* grid-column: 1/3; */}
		${'' /* grid-row: 2; */}
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
	width: 100%;

	input,
	textarea {
		border: none;
		padding: 1rem;
		font-size: 1.8rem;
		max-width: 100%;
		background-color: ${background.dark};
		color: #fff;
		box-shadow: ${ELEVATIONS.smLight};
		border-radius: 4px;
		transition: all 0.3s ease-in-out;

		&::placeholder {
			color: #ffffff80;
			font-family: 'Glegoo';
		}

		&:focus {
			box-shadow: ${ELEVATIONS.mdLight};
			transform: scale(1.02);
		}
	}

	& input {
		height: 40px;
		margin-bottom: 1rem;
	}
	& textarea {
		min-height: 200px;
		resize: none;
	}
`;

export const Name = css`
	display: flex;

	width: 100%;
	& input {
		&:first-of-type {
			margin-right: 5%;
			${MEDIA_QUERIES.phoneOnly} {
				margin-right: 0;
			}
		}
		padding: 1rem;
		font-size: 1.8rem;
		height: 40px;
		width: 100%;
		margin-bottom: 1rem;
	}
	${MEDIA_QUERIES.phoneOnly} {
		flex-wrap: wrap;
	}
`;

export const Btn = css`
	padding: 8px 32px;
	background-color: transparent;
	border: 1px solid ${primary};
	text-decoration: none;
	box-shadow: ${ELEVATIONS.smLight};
	border-radius: 4px;
	order: 1;
	margin: 3rem 0;
	font-size: 1.8rem;
	line-height: 28px;
	color: #2f2e38;
	cursor: pointer;
	transition: all 0.3s ease-in-out;
	font-family: 'Glegoo';

	&:disabled {
		border: 1px solid #000;
	}

	&:hover {
		box-shadow: ${ELEVATIONS.mdLight};
		transform: scale(1.05);
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
	font-size: 1.8rem;
	font-family: ${body};
	max-width: 600px;
`;

export const MessageError = css`
	padding: 1rem;
	background-color: ${primary};
	margin: 0 auto 1rem;
	color: #fff;
	font-size: 1.8rem;
	font-family: ${body};
	max-width: 600px;
`;
