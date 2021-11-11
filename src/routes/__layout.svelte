<script>
	import Footer from '$components/footer/Footer.svelte';
	import Header from '$components/header/Header.svelte';
</script>

<div>
	<Header />

	<main>
		<slot />
	</main>

	<Footer />
</div>

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		min-height: calc(100vh - 200px);
	}
</style>
