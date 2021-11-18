<script>
	export let styles;
	export let heading;
	export let text;
	export let points;
</script>

<div class={styles}>
	<h3>{heading}</h3>
	<p>{text}</p>
	<ul>
		{#each points as point}
			<li>{point}</li>
		{/each}
	</ul>
</div>

<style>
	div {
		padding: 16px;
		border-radius: 5px;
		backdrop-filter: blur(16px) saturate(180%);
		-webkit-backdrop-filter: blur(16px) saturate(180%);
		background-color: rgba(74, 74, 74, 0.75);
		border: 1px solid rgba(255, 255, 255, 0.125);
	}

	h3,
	p,
	li {
		color: #ffffff;
	}

	h3 {
		font-size: 2.4rem;
	}

	p {
		font-size: 1.8rem;
	}

	ul {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: column;
		gap: 8px;
	}

	li {
		font-size: 1.8rem;
	}

	ul li:before {
		content: '\2022';
		color: #ff715b;
		width: 1em;
		display: inline-block;
		font-weight: bold;
	}

	/* tabletUp */
	@media only screen and (min-width: 37.5em) {
		div {
			width: 40%;
		}
	}

	/* tabletLandUp */
	@media only screen and (min-width: 56.25em) {
	}

	/* desktopUp */
	@media only screen and (min-width: 75em) {
		div {
			width: 90%;
		}

		h3 {
			font-size: 2.4rem;
		}
	}

	@media only screen and (min-width: 96em) {
		div {
			width: 80%;
		}
	}
</style>
