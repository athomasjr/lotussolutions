<script>
	import crossPlat from '$assets/crossplat.png';
	import seo from '$assets/seo.png';
	import webDesign from '$assets/web-design.png';
	import { Container } from '$styles/utils/container';
	import SectionHeader from '../common/SectionHeader.svelte';
	import Card from './Card.svelte';
	import * as S from './styles';

	const services = [
		{
			name: 'Web | Mobile',
			icon: webDesign,
			description: `Customer-driven development builds a lasting connection between your business and your customers. We use design patterns proven to help your customers stick around.`,
			background: true,
			modalDesc: 'WAGMI'
		},
		{
			name: 'Cross-Platform',
			icon: crossPlat,
			description:
				'Reach your customers faster on the platform of their choice. We develop your application using industry-leading cross-platform technologies; reach your customers wherever they are.',
			background: false,
			modalDesc:
				'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
		},
		{
			name: 'SEO Optimization',
			icon: seo,
			description:
				'Grow your business with organic traffic. Less than 10 percent of people click on paid ads; organic reach builds trust with your customers.',
			background: true,
			modalDesc: 'NGMI'
		}
	];
</script>

<section id="services">
	<div class={Container}>
		<SectionHeader
			titleMain="Deliver Lasting"
			titleAccent="Experiences"
			subText="We develop your applications to deliver the customer experience you envision; your customers will thank you for it."
		/>

		<div class={S.Services}>
			{#each services as service}
				<Card
					name={service.name}
					icon={service.icon}
					description={service.description}
					backgroundColor={service.background}
					modalDesc={service.modalDesc}
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
