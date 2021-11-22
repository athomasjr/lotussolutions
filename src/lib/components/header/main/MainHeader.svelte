<script>
	import { page } from '$app/stores';
	import Logo from '$assets/logo.svg';
	import Links from '$constants/links';
	import * as S from './mainHeaderStyles';
	let dark;
	let tabs = ['one', 'two', 'three'];
	let selected = tabs[0];

	$: dark = $page.path === '/' ? false : true;
	$: console.log($page);
</script>

<header class:dark class={S.Header}>
	<a href="/">
		<img src={Logo} alt="logo" />
	</a>
	<nav class={S.Nav}>
		<ul>
			{#each Links as link}
				<li class:active={$page.path === link.href}>
					<a href={link.href}>{link.text}</a>
				</li>
			{/each}
		</ul>
	</nav>
	<a class={S.CTA} href="/#contact">Hire Us</a>
</header>

<style>
	.dark {
		background-color: #2f2e38;
	}

	.active {
		color: #fff;
	}

	.active::after {
		content: '';
		position: absolute;
		background-color: #ff715b;
		height: 3px;
		width: 100%;
		left: 0;
		bottom: -2px;
		transition: 0.3s;
	}
</style>
