<script>
	export let styles;
	export let heading;
	export let text;
	export let points;
</script>

<div class={styles}>
	<h3>{heading}</h3>
	<p>{text}</p>
	<!-- <ul>
		{#each points as point}
			<li>{point}</li>
		{/each}
	</ul> -->
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		padding: 16px 24px;
		border-radius: 4px;
		max-width: 100%;
		/* min-height: 300px; */
		background: linear-gradient(90deg, #ece9e6 -1.11%, #ffffff 100%);
		box-shadow: 1px 2px 2px hsl(240deg 8% 0%/ 0.333), 2px 4px 4px hsl(240deg 8% 0%/ 0.333),
			3px 6px 6px hsl(240deg 8% 0%/ 0.333);
	}

	h3,
	p,
	h3 {
		font-size: 2.4rem;
	}

	p {
		font-size: 1.8rem;
	}

	/* tabletUp */
	@media only screen and (min-width: 37.5em) {
		div {
			justify-content: space-around;
			max-width: 250px;
			/* min-height: 400px; */
		}
	}

	/* tabletLandUp */
	@media only screen and (min-width: 56.25em) {
	}

	/* desktopUp */
	@media only screen and (min-width: 75em) {
		div {
			max-width: 295px;
		}

		h3 {
			font-size: 2.4rem;
		}
	}
</style>
