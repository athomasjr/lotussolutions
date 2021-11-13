<script>
	import { Title } from '$lib/utils/title';
	import webSvg from '../../../assets/logo.svg';
	import slider from '../../../assets/sliderBtn.svg';
	import sliderGrey from '../../../assets/sliderBtnGrey.svg';
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

<section id="#services">
	<div class={S.Container}>
		<div class={S.Header}>
			<span class={Title}>Explore Our <span>Services</span></span>
			<div class={S.Description}>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan sit iaculis nunc eget diam
				erat sit nisl in.
			</div>
		</div>
		<div class={S.Explore}>
			<a href="/" class={S.Btn}>Explore More</a>
		</div>
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
		<div class={S.Slider}>
			<img src={slider} alt="bullet" />
			<img src={sliderGrey} alt="bullet" />
		</div>
	</div>
</section>
