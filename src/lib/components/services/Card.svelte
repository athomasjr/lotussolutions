<script>
	export let name;
	export let icon;
	export let description;
	export let backgroundColor;
	export let modalDesc;
	import * as S from './cardStyles';

	import { fly } from 'svelte/transition';
	import Popup from '../modal/Popup.svelte';
	import { getContext } from 'svelte';
	const { open } = getContext('simple-modal');

	const showPopup = () => {
		open(Popup, { message: name, modalDesc: modalDesc });
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
		Learn More
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
