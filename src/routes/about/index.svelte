<script context="module">
	import * as S from './styles';
	import { Title } from '$styles/utils/title';
	import SectionHeader from '$components/common/SectionHeader.svelte';
	import eric from '$assets/eric.png';
	import antony from '$assets/antony.png';
	export const prerender = true;
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section>
	<div class={S.Container}>
		<SectionHeader blackText titleMain="Get To" titleAccent="Know" bordered="Us" />
		<div class={S.Story}>
			<p />
			t is a long established fact that a reader will be distracted by the readable content of a page
			when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
			distribution of letters, as opposed to using 'Content here, content here', making it look like
			readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as
			their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their
			infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose
			(injected humour and the like).
		</div>
		<div class={S.Person1}>
			<div class={S.Founder}><img src={eric} alt="eric" class={S.Face} /></div>

			<div class={S.Info}>
				<div class={S.Name}>Eric Boisvenu</div>
				<div class={S.Title}>Co-Founder</div>
				<p class={S.Description}>
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
					been the industry's standard dummy text ever since th
				</p>
				<button class={S.Button}>Eric's Bio</button>
			</div>
		</div>
		<div class={S.Person2}>
			<div class={S.Founder}><img src={antony} alt="eric" class={S.Face} /></div>
			<div class={S.Info}>
				<div class={S.Name}>Antonio Thomas</div>
				<div class={S.Title}>Co-Founder</div>
				<p class={S.Description}>
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
					been the industry's standard dummy text ever since th
				</p>
				<button class={S.Button}>Antonio's Bio</button>
			</div>
		</div>
	</div>
</section>

<style>
</style>
