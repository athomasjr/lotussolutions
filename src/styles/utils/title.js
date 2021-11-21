import { css } from '@emotion/css';
import { FONTS, COLORS, MEDIA_QUERIES } from '$styles/constants';

const { title } = FONTS;
const { primary, dark } = COLORS;

export const Title = css`
	line-height: 75px;
	color: ${dark};
	margin: 16px 0px;
	font-family: ${title};
	& span {
		color: ${primary};
	}
	& span:nth-child(2) {
		border: 2px solid #2f2e38;
		padding: 5px;
	}

	${MEDIA_QUERIES.tabletUp} {
		font-size: 3.6rem;
	}
	${MEDIA_QUERIES.desktopUp} {
		font-size: 4.6rem;
	}
	${MEDIA_QUERIES.phoneOnly} {
		font-size: 2.4rem;
	}
`;
