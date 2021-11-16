import { css } from '@emotion/css';
import { MEDIA_QUERIES } from '../constants';

export const Container = css`
	padding: 16px;

	${MEDIA_QUERIES.desktopUp} {
		padding: 0 126px;
	}
`;
