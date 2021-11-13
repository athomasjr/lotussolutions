<script>
	import Logo from '$assets/logo.svg';
	import Links from '$constants/links';
	import * as S from './mainHeaderStyles';
</script>

<header class={S.Header}>
	<a href="/">
		<img src={Logo} alt="logo" />
	</a>
	<nav class={S.Nav}>
		<ul>
			{#each Links as link}
				<li>
					<a href={link.href}>{link.text}</a>
				</li>
			{/each}
		</ul>
	</nav>
	<a class={S.CTA} href="#contact">Contact Us</a>
</header>
