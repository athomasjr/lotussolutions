<script context="module">
	export const prerender = true;
	import Contact from '$components/contact/Contact.svelte';
	import Hero from '$components/hero/Hero.svelte';
	import Process from '$components/process/Process.svelte';
	import Services from '$components/services/Services.svelte';
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<Hero />
<Services />
<Process />
<Contact />
