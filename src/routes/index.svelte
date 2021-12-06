<script context="module">
	export const prerender = true;
	import Contact from '$components/contact/Contact.svelte';
	import Hero from '$components/hero/Hero.svelte';
	import Process from '$components/process/Process.svelte';
	import SEO from '$components/seo/index.svelte';
	import Services from '$components/services/Services.svelte';
</script>

<SEO title="Lotus Solutions - Change How Your Customers Define Experience" />
<Hero />
<Services />
<Process />
<Contact />
