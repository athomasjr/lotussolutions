<script>
	import Footer from '$components/footer/Footer.svelte';
	import Header from '$components/header/Header.svelte';
	import '$styles/app.css';
	import { MEDIA_QUERIES } from '$styles/constants';
	import { css } from '@emotion/css';

	const Container = css`
		overflow: hidden;
		display: flex;
		flex-direction: column;

		${MEDIA_QUERIES.desktopUp} {
			main {
				flex: 1 0 auto;
				min-height: calc(100vh - 200px);
			}
		}
	`;
</script>

<div class={Container}>
	<Header />
	<main>
		<slot />
	</main>

	<Footer />
</div>
