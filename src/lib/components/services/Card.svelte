<script>
	import bullet from '../../../assets/bullet.svg';
	import * as S from './cardStyles';
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
	</div>
</div>

<style>
</style>
