import { COLORS, MEDIA_QUERIES } from '$styles/constants';
import { css } from '@emotion/css';

// export const Process = css`
// 	background: #000000;
// 	width: 100%;
// 	position: relative;
// `;

export const Header = css`
	position: relative;
	h2 {
		position: relative;
		color: #ffffff;
	}

	p {
		color: #ffffff;
		font-size: 1.8rem;
		margin-bottom: 32px;
	}

	${MEDIA_QUERIES.desktopUp} {
		width: 448px;
		&:before {
			content: '';
			position: absolute;
			background-color: ${COLORS.primary};
			height: 2px;
			width: 138px;
			left: -146px;
			top: 36px;
			transition: 0.3s;
		}

		p {
			font-size: 1.8rem;
			margin-bottom: 10px;
		}

		a {
		}
	}
`;

export const ContentContainer = css`
	${MEDIA_QUERIES.desktopUp} {
		display: grid;
		grid-template-columns: 1fr 1fr;

		img {
			position: absolute;
			width: 623px;
			height: 514px;
			left: 817px;
			top: 146px;
		}
	}
`;

export const ProcessCardOne = css`
	position: relative;
	${MEDIA_QUERIES.tabletUp} {
		&:before {
			content: '\\0031';
			position: absolute;
			color: ${COLORS.primary};
			font-size: 6rem;
			left: -38px;
			top: -42px;
		}
	}
	${MEDIA_QUERIES.desktopUp} {
		&:before {
			content: '\\0030\\0031';
			font-size: 8rem;
			${'' /* left: -38px; */}
			top: -42px;
		}
	}
`;

export const ProcessCardTwo = css`
	position: relative;
	${MEDIA_QUERIES.tabletUp} {
		&:before {
			content: '\\0032';
			position: absolute;
			color: ${COLORS.primary};
			font-size: 6rem;
			left: -38px;
			top: -42px;
		}
	}
	${MEDIA_QUERIES.desktopUp} {
		&:before {
			content: '\\0030\\0032';
			font-size: 8rem;
			${'' /* left: -98px; */}
			top: -42px;
		}
	}
`;
export const ProcessCardThree = css`
	position: relative;
	${MEDIA_QUERIES.tabletUp} {
		&:before {
			content: '\\0033';
			position: absolute;
			color: ${COLORS.primary};
			font-size: 6rem;
			left: -38px;
			top: -42px;
		}
	}
	${MEDIA_QUERIES.desktopUp} {
		&:before {
			content: '\\0030\\0033';
			font-size: 8rem;
			${'' /* left: -98px; */}
			top: -42px;
		}
	}
`;

export const CardsContainer = css`
	display: flex;
	flex-direction: column;
	gap: 40px;

	${MEDIA_QUERIES.tabletUp} {
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-between;
	}
`;
