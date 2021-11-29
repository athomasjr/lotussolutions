<script context="module">
	export const prerender = true;
	import Contact from '$components/contact/Contact.svelte';
	import Hero from '$components/hero/Hero.svelte';
	import Process from '$components/process/Process.svelte';
	import Services from '$components/services/Services.svelte';
	import SvelteSeo from 'svelte-seo';
</script>

<SvelteSeo
	openGraph={{
		title: 'Lotus Solutions',
		description: 'Our Description',
		url: 'https://www.lotussolutions.io',
		type: 'website'
		// images: [
		// 	{
		// 		url: 'https://www.example.com/images/og-image.jpg',
		// 		width: 850,
		// 		height: 650,
		// 		alt: 'Og Image Alt'
		// 	}
		// ]
	}}
/>

<svelte:head>
	<title>Home</title>
</svelte:head>

<Hero />
<Services />
<Process />
<Contact />
