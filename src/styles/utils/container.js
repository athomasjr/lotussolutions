import { css } from '@emotion/css';
import { MEDIA_QUERIES } from '../constants';

export const Container = css`
	padding: 40px 16px 64px;

	${MEDIA_QUERIES.desktopUp} {
		padding: 146px 146px 80px;
	}
`;
