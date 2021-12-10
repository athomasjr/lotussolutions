<script>
	// export let styles;
	export let heading;
	export let text;
	export let icon;
</script>

<div id="card">
	<div class="heading">
		<img src={icon.icon} alt={icon.alt} />
		<h3>{heading}</h3>
	</div>
	<p>{text}</p>
</div>

<style>
	#card {
		position: relative;
		z-index: 3;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		padding: 16px 24px;
		border-radius: 4px;
		/* max-width: 100%; */
		/* min-height: 300px; */
		background: linear-gradient(90deg, #ece9e6 -1.11%, #ffffff 100%);
		box-shadow: 1px 2px 2px hsl(240deg 8% 0%/ 0.333), 2px 4px 4px hsl(240deg 8% 0%/ 0.333),
			3px 6px 6px hsl(240deg 8% 0%/ 0.333);
	}

	.heading {
		display: flex;
		align-content: center;
		align-items: center;
		justify-content: space-between;
	}

	img {
		/* position: absolute; */
		inset: 0 0 0 -150px;
		filter: invert(57%) sepia(54%) saturate(919%) hue-rotate(319deg) brightness(98%) contrast(125%);
		width: 4rem;
		height: 4rem;
		/* margin: auto 0; */

		/* width: 100%;
		z-index: 2; */
	}

	/* drop-shadow(1px 2px 4px hsl(30deg 14% 50%)) */

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
		#card {
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
		h3 {
			font-size: 2.4rem;
		}
	}
</style>
