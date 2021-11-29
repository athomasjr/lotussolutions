<script>
	import Links from '$constants/links';
	import { MobileHeader, MobileMenu, MobileNav, SideBar } from './mobileHeaderStyles';

	let showSideBar = false;
</script>

<header class={MobileHeader}>
	<button
		class={MobileMenu}
		class:openButton={showSideBar}
		on:click={() => (showSideBar = !showSideBar)}
	>
		<div />
		<div />
		<div />
	</button>
	<aside class={SideBar} class:open={showSideBar}>
		<nav class={MobileNav}>
			<ul>
				{#each Links as link}
					<li on:click={() => (showSideBar = !showSideBar)}>
						<a href={link.href}>{link.text}</a>
					</li>
				{/each}
			</ul>
		</nav>
	</aside>
</header>

<style>
	/* aside {
		transition: transform 300ms;
		transform: translateX(100%);
	} */

	.open {
		transform: translateX(0);
	}

	.openButton {
		position: fixed;
		top: 16px;
	}

	.openButton div:first-child {
		transform: translateY(8px) rotateZ(45deg);
	}

	.openButton div:nth-child(2) {
		opacity: 0;
	}

	.openButton div:nth-child(3) {
		transform: translateY(-6px) rotateZ(-45deg);
	}
</style>
