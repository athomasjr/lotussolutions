<script>
	import * as S from './cardStyles';
	import bullet from '../../../assets/bullet.svg';
	export let name;
	export let icon;
	export let description;
	export let backgroundColor;
</script>

<div class={S.Container}>
	<div
		class={S.Wrapper}
		style="background: {backgroundColor ? '#2f2e38' : '#fff'}; {backgroundColor
			? ''
			: 'border: 1px solid #2F2E38; border-radius: 4px; color: #000;'}"
	>
		<div class={S.Head}>
			<img class="service__icon" src={icon} alt={name} />
			<h2>{name}</h2>
		</div>
		<p class={S.Description}>
			{description}
		</p>
		<div class={S.Points}>
			<div>
				<img src={bullet} alt="bullet" class="service__point" />
				<span>bulletPoint 1</span>
			</div>
			<div class="service__bullet-point">
				<img src={bullet} alt="bullet" class="service__point" />
				<span>bulletPoint 2</span>
			</div>
			<div class="service__bullet-point">
				<img src={bullet} alt="bullet" class="service__point" />
				<span>bulletPoint 3</span>
			</div>
		</div>
	</div>
</div>

<style>
</style>
