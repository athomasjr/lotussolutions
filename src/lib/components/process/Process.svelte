<script>
	import { Container } from '$styles/utils/container';
	import SectionHeader from '../common/SectionHeader.svelte';
	import ProcessCard from './ProcessCard.svelte';
	import * as S from './processStyles';

	const processes = [
		{
			styles: S.ProcessCardOne,
			heading: 'Goals & Key Features',
			text: 'Define the experience you want to deliver to your customers. We review the essential features, platforms, and your target audience.'
			// points: ['This is point 1', 'This is point 2', 'This is point 3']
		},
		{
			styles: S.ProcessCardTwo,
			heading: 'Develop & Review',
			text: `We Develop your application with your vision and business' success as the top priorities. We implement a milestone review system to ensure efficient delivery.`
			// points: ['This is point 1', 'This is point 2', 'This is point 3']
		},
		{
			styles: S.ProcessCardThree,
			heading: 'Launch',
			text: 'Start delivering lasting experiences to your customers. We use industry-leading tools to ensure you reach your customers secure and fast.'
			// points: ['This is point 1', 'This is point 2', 'This is point 3']
		}
	];
</script>

<section id="process">
	<div id="container" class={Container}>
		<SectionHeader
			whiteText
			titleMain="How It"
			titleAccent="Works"
			subText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nunc feugiat orci diam feugiat cras. Neque ipsum pharetra risus"
		/>

		<div class={S.CardsContainer}>
			{#each processes as process}
				<ProcessCard styles={process.styles} heading={process.heading} text={process.text} />
			{/each}
		</div>
	</div>
</section>

<style>
	#container {
		/* background-image: url('../../../assets/processbg.jpeg'); */
		/* background-size: cover; */
		background: #2f2e38;
		background-position: top;
		min-height: 100vh;
		display: flex;
		flex-direction: column;
	}
</style>
