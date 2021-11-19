<script>
	import { COLORS, MEDIA_QUERIES } from '$styles/constants';
	import { Title } from '$styles/utils/title';
	import { css } from '@emotion/css';

	export const Header = css`
		position: relative;
		h2 {
			position: relative;
		}

		p {
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

	export let titleMain;
	export let titleAccent;
	export let subText;
	export let whiteText = false;
</script>

<div class:white-text={whiteText} class={Header}>
	<h2 class={Title}>{titleMain} <span>{titleAccent}</span></h2>
	{#if subText}
		<p>
			{subText}
		</p>
	{/if}
</div>

<style>
	.white-text h2 {
		color: #ffffff;
	}

	.white-text p {
		color: #ffffff;
	}
</style>
