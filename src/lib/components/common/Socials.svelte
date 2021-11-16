<script>
	import LinkedInIcon from '$assets/linkedin-icon.svg';
	import TwitterIcon from '$assets/twitter-icon.svg';
	import { css } from '@emotion/css';
	export let twitterWidth = 'auto';
	export let linkedInWidth = 'auto';
	export let flexDirection = 'row';

	const SocialContainer = css`
		display: flex;
		gap: 18px;
	`;
</script>

<div class={SocialContainer} style="flex-direction:{flexDirection}">
	<img style="width: {twitterWidth}px" src={TwitterIcon} alt="Twitter" />
	<img style="width: {linkedInWidth}px" src={LinkedInIcon} alt="LinkedIn" />
</div>

<style>
	/* your styles go here */
</style>
