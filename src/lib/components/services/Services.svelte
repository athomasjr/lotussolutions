<script>
	import webSvg from '$assets/logo.svg';
	import { Container } from '$styles/utils/container';
	import SectionHeader from '../common/SectionHeader.svelte';
	import Card from './Card.svelte';
	import * as S from './styles';

	const services = [
		{
			name: 'Custom Design',
			icon: webSvg,
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nunc feugiat orci diam feugiat cras. Neque ipsum pharetra risus risus.',
			background: true
		},
		{
			name: 'Custom App',
			icon: webSvg,
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nunc feugiat orci diam feugiat cras. Neque ipsum pharetra risus risus.',
			background: false
		},
		{
			name: 'UI/UX Design',
			icon: webSvg,
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nunc feugiat orci diam feugiat cras. Neque ipsum pharetra risus risus.',
			background: true
		}
	];
</script>

<section id="services">
	<div class={Container}>
		<SectionHeader
			titleMain="Explore Our"
			titleAccent="Services"
			subText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan sit iaculis nunc eget diam erat sit nisl in."
		/>

		<div class={S.Services}>
			{#each services as service}
				<Card
					name={service.name}
					icon={service.icon}
					description={service.description}
					backgroundColor={service.background}
				/>
			{/each}
		</div>
	</div>
</section>

<style>
	section {
		min-height: 100vh;
	}
</style>
