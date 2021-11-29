<script>
	import { COLORS, MEDIA_QUERIES } from '$styles/constants';
	import { Title } from '$styles/utils/title';
	import { css } from '@emotion/css';

	export const Header = css`
		position: relative;

		h2 {
			position: relative;
		}

		${MEDIA_QUERIES.tabletUp} {
			margin-bottom: 80px;
		}

		${MEDIA_QUERIES.desktopUp} {
			/* width: 448px; */

			&:before {
				content: '';
				position: absolute;
				background-color: ${COLORS.primary};
				height: 2px;
				width: 138px;
				inset: 50% 0 0 -146px;
				transform: translateY(-50%);
				transition: 0.3s;
			}
		}

		${MEDIA_QUERIES.bigDesktopUp} {
			&:before {
				width: 280px;
				inset: 50% 0 0 -290px;
			}
		}
	`;

	export const Desc = css`
		position: relative;
		margin: -2rem 0 5.6rem;

		p {
			font-size: 1.8rem;
			margin-bottom: 32px;
		}

		${MEDIA_QUERIES.tabletUp} {
			width: 448px;
			margin-top: -6rem;

			p {
				font-size: 1.8rem;
				margin-bottom: 10px;
			}
		}

		${MEDIA_QUERIES.desktopUp} {
			margin-bottom: 8rem;
		}
	`;

	export let titleMain;
	export let titleAccent;
	export let subText;
	export let whiteText = false;
	export let extraText;
	export let bordered;
</script>

<div class:white-text={whiteText} class={Header}>
	<h2 class={Title}>
		{titleMain} <span>{titleAccent} </span>
		{extraText !== undefined ? extraText : ''}
		{#if bordered !== undefined} <span> {bordered}</span> {/if}
	</h2>
</div>
<div class={Desc}>
	{#if subText}
		<p class:white-text={whiteText}>
			{subText}
		</p>
	{/if}
</div>

<style>
	.white-text {
		color: #ffffff;
	}
</style>
