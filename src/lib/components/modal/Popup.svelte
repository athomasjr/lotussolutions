<script>
	export let message;
	export let modalDesc;
	export let features;
</script>

<div>
	<h2>{message}</h2>
	<p>{modalDesc}</p>

	<ul>
		{#each features as feature}
			<li>{feature}</li>
		{/each}
	</ul>
	<button>Get Started</button>
</div>

<style>
	h2 {
		font-size: 2rem;
		text-align: center;
	}

	p {
		padding-bottom: 16px;
	}

	ul {
		list-style: none;
		padding: 0;
		margin: 0;
		font-family: 'Exo 2', sans-serif;
		font-size: 1.6rem;
		display: flex;
		flex-direction: column;
		gap: 8px;
		margin-bottom: 24px;
	}

	li:before {
		display: inline-block;
		border-radius: 50%;
		margin-right: 8px;
		content: '';
		background: #ff715b;
		width: 8px;
		height: 8px;
	}

	button {
		cursor: pointer;
		padding: 8px 16px;
		border: none;
		background: #ff715b;
		color: #fff;
		border-radius: 4px;
		align-self: flex-start;
		font-size: 1.6rem;
		box-shadow: 0.5px 1px 1px hsl(30deg 14% 50% / 0.7);
		transition: 0.3s ease-in-out;
	}

	button:hover {
		transform: scale(1.05);
		box-shadow: 1px 2px 2px hsl(30deg 14% 50% / 0.333), 2px 4px 4px hsl(30deg 14% 50% / 0.333),
			3px 6px 6px hsl(30deg 14% 50% / 0.333);
	}
</style>
