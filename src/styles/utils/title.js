import { css } from '@emotion/css';
import { FONTS, COLORS } from '$styles/constants';

const { title } = FONTS;
const { primary, dark } = COLORS;

export const Title = css`
	font-size: 4.6rem;
	line-height: 75px;
	color: ${dark};
	margin: 16px 0px;
	font-family: ${title};
	& span {
		color: ${primary};
	}
	@media (max-width: 1200px) {
		font-size: 3.6rem;
	}
	@media (max-width: 899px) {
		font-size: 3.2rem;
	}
	@media (max-width: 599px) {
		font-size: 2rem;
	}
	@media (max-width: 400px) {
		font-size: 1.5rem;
	}
`;
