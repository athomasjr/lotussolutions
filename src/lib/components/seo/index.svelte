<script>
	import { page } from '$app/stores';
	import siteMeta from '$site/siteMeta';
	import SvelteSeo from 'svelte-seo';
	export let title = siteMeta.title;
	export let description = siteMeta.description;
	export let image = `${siteMeta.siteUrl}${siteMeta.image}`;
	$: canonical = `${siteMeta.siteUrl}${$page.path}`;
	export let article = {};
	export let openGraph = {
		title,
		locale: siteMeta.ogLanguage,
		url: canonical,
		description: siteMeta.description,
		images: [{ url: image }],
		article
	};

	export let twitter = {
		site: siteMeta.social.twitter.handle,
		title,
		description,
		image,
		imageAlt: description
	};
</script>

<SvelteSeo {title} {description} {canonical} {openGraph} {twitter} />
