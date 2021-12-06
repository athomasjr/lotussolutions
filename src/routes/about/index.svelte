<script context="module">
	import antony from '$assets/antony.png';
	import eric from '$assets/eric.png';
	import SectionHeader from '$components/common/SectionHeader.svelte';
	import SEO from '$components/seo/index.svelte';
	import * as S from './styles';
	export const prerender = true;
</script>

<SEO title="Lotus Solutions - About" />

<section>
	<div class={S.Container}>
		<SectionHeader blackText titleMain="Get To" titleAccent="Know" bordered="Us" />

		<div class={S.Person1}>
			<div class={S.Founder}><img src={eric} alt="eric" class={S.Face} /></div>

			<div class={S.Info}>
				<div class={S.Name}>Eric Boisvenu</div>
				<div class={S.Title}>Co-Founder</div>
				<p class={S.Description}>
					I'm a Self Taught FullStack developer coming from the construction industry. I am
					self-motivated, cooperative, well-organized, and a dedicated team player, one of the core
					principles of Lotus Solutions. Solving challenging problems fuels me. I enjoy Camping,
					ATVing, Hiking, and finding new places to eat great food in my free time.
				</p>
				<!-- <button class={S.Button}>Eric's Bio</button> -->
			</div>
		</div>
		<div class={S.Person2}>
			<div class={S.Founder}><img src={antony} alt="eric" class={S.Face} /></div>
			<div class={S.Info}>
				<div class={S.Name}>Antonio Thomas</div>
				<div class={S.Title}>Co-Founder</div>
				<p class={S.Description}>
					Hi, I'm Antonio, a self-taught web developer, and writer from Wisconsin. I'm also a
					father, husband, fitness competitor, "amateur" amateur bass fisherman. I love working with
					the latest technologies such as React, Svelte, CSS, and CSS-in-Js.
				</p>
				<!-- <button class={S.Button}>Antonio's Bio</button> -->
			</div>
		</div>
	</div>
</section>

<style>
</style>
