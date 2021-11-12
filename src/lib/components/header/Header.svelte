<script>
	import MainHeader from './main/MainHeader.svelte';
	import MobileHeader from './mobile/MobileHeader.svelte';
	let screenWidth;
</script>

<svelte:window bind:innerWidth={screenWidth} />

{#if screenWidth > 1199}
	<MainHeader />
{:else}
	<MobileHeader />
{/if}

<style>
</style>
