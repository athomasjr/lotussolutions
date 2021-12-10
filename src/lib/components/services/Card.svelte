<script>
	export let name;
	export let icon;
	export let description;
	export let backgroundColor;
	export let modalDesc;
	export let features;
	import { getContext } from 'svelte';
	import Popup from '../modal/Popup.svelte';
	import * as S from './cardStyles';
	const { open } = getContext('simple-modal');

	const showPopup = () => {
		open(Popup, { message: name, modalDesc: modalDesc, features: features });
	};
</script>

<div class:white={!backgroundColor} class={S.Wrapper}>
	<div class={S.Head}>
		<img class="service__icon" src={icon} alt={name} />
		<h2>{name}</h2>
	</div>
	<p class={S.Description}>
		{description}
	</p>
	<button on:click={showPopup} class:white-shadow={!backgroundColor} class={S.Btn}>
		More Info
	</button>
</div>

<style>
	.white {
		background: #ffffff;
		border: 1px solid #2f2e38;
		color: #2f2e38;
	}

	.white-shadow {
		box-shadow: 0.5px 1px 1px hsl(0deg 0% 50% / 0.7);
	}

	.white-shadow:hover {
		box-shadow: 1px 2px 2px hsl(0deg 0% 50% / 0.333), 2px 4px 4px hsl(0deg 0% 50% / 0.333),
			3px 6px 6px hsl(0deg 0% 50% / 0.333);
	}
</style>
