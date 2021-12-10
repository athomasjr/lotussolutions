<script>
	import services from '$constants/services';
	import { Container } from '$styles/utils/container';
	import SectionHeader from '../common/SectionHeader.svelte';
	import Card from './Card.svelte';
	import * as S from './styles';
</script>

<section id="services">
	<div class={Container}>
		<SectionHeader
			titleMain="Deliver Lasting"
			titleAccent="Experiences"
			subText="We develop applications your customers adore; they'll thank you for it."
		/>

		<div class={S.Services}>
			{#each services as service}
				<Card
					name={service.name}
					icon={service.icon}
					description={service.description}
					backgroundColor={service.background}
					modalDesc={service.modalDesc}
					features={service.features}
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
