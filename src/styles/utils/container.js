import { css } from '@emotion/css';
import { MEDIA_QUERIES } from '../constants';

export const Container = css`
	padding: 40px 24px 64px;

	${MEDIA_QUERIES.tabletUp} {
		padding: 40px 64px 64px;
	}
	${MEDIA_QUERIES.desktopUp} {
		padding: 146px 146px 80px;
	}
	${MEDIA_QUERIES.bigDesktopUp} {
		padding: 146px 290px 80px;
	}
`;
