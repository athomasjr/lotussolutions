import { COLORS } from '$styles/constants';
import { css } from '@emotion/css';

export const MobileHeader = css`
	position: sticky;
	top: 0;
	height: 80px;
	padding: 0 16px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	z-index: 2;
`;

export const MobileMenu = css`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	width: 4.5rem;
	height: 4.5rem;
	padding: 12px 0;
	background: transparent;
	border: none;
	cursor: pointer;
	z-index: 100;

	div {
		width: 2.5rem;
		height: 0.29rem;
		background: ${COLORS.primary};
		transition: opacity 300ms, transform 300ms;
	}
`;

export const SideBar = css`
	position: fixed;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	height: 100vh;
	width: 100%;
	top: 0;
	right: 0;
	background: ${COLORS.background.light};
	transition: transform 300ms;
	transform: translateX(100%);
`;

export const MobileNav = css`
	ul {
		padding: 0;
		display: flex;
		flex-direction: column;
		list-style: none;
		gap: 16px;
	}

	li {
		font-size: 1.8rem;
	}
`;
