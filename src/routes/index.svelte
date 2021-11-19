<script context="module">
	export const prerender = true;
	import Hero from '$components/hero/Hero.svelte';
	import Services from '$components/services/Services.svelte';
	import Contact from '$components/contact/Contact.svelte';
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<Hero />
<Services />
<Contact />

<style>
</style>
