<script>
	import FacebookIcon from '$assets/facebook.svg';
	import LinkedInIcon from '$assets/linkedin-icon.svg';
	import TwitterIcon from '$assets/twitter-icon.svg';
	import siteMeta from '$site/siteMeta';
	import { css } from '@emotion/css';
	export let twitterWidth = 'auto';
	export let linkedInWidth = 'auto';
	export let facebookWidth = 'auto';
	export let flexDirection = 'row';

	const SocialContainer = css`
		display: flex;
		gap: 18px;
	`;
</script>

<div class={SocialContainer} style="flex-direction:{flexDirection}">
	<img style="width: {twitterWidth}px" src={TwitterIcon} alt="Twitter" />
	<img style="width: {linkedInWidth}px" src={LinkedInIcon} alt="LinkedIn" />
	<a href={siteMeta.social.facebook.url} target="_blank" rel="noopener noreferrer">
		<img style="width: {facebookWidth}px" src={FacebookIcon} alt="Facebook" />
	</a>
</div>
