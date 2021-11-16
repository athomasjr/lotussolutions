<script>
	import MainFooter from './main/MainFooter.svelte';
	import MobileFooter from './mobile/MobileFooter.svelte';
	let screenWidth;
</script>

<svelte:window bind:innerWidth={screenWidth} />
<p>{screenWidth}</p>

{#if screenWidth > 1023}
	<MainFooter />
{:else}
	<MobileFooter />
{/if}
