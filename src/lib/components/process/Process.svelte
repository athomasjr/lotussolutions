<script>
	import { Container } from '$styles/utils/container';
	import SectionHeader from '../common/SectionHeader.svelte';
	import ProcessCard from './ProcessCard.svelte';
	import * as S from './processStyles';

	const processes = [
		{
			styles: S.ProcessCardOne,
			heading: 'Find Your Solution',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nunc feugiat orci diam feugiat cras. Neque ipsum pharetra risus ',
			points: ['This is point 1', 'This is point 2', 'This is point 3']
		},
		{
			styles: S.ProcessCardTwo,
			heading: 'Find Your Solution',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nunc feugiat orci diam feugiat cras. Neque ipsum pharetra risus ',
			points: ['This is point 1', 'This is point 2', 'This is point 3']
		},
		{
			styles: S.ProcessCardThree,
			heading: 'Find Your Solution',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nunc feugiat orci diam feugiat cras. Neque ipsum pharetra risus ',
			points: ['This is point 1', 'This is point 2', 'This is point 3']
		}
		// {
		// 	styles: S.ProcessCardFour,
		// 	heading: 'Find Your Solution',
		// 	text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nunc feugiat orci diam feugiat cras. Neque ipsum pharetra risus ',
		// 	points: ['This is point 1', 'This is point 2', 'This is point 3']
		// }
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
				<ProcessCard
					styles={process.styles}
					heading={process.heading}
					text={process.text}
					points={process.points}
				/>
			{/each}
		</div>
	</div>
</section>

<style>
	#container {
		background-image: url('../../../assets/processbg.jpeg');
		background-size: cover;
		background-position: top;
		height: 100vh;
		display: flex;
		flex-direction: column;
	}
</style>
