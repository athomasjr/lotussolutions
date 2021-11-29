<script>
	import Socials from '$components/common/Socials.svelte';
	import resources from '$constants/footerLinks';
	import * as S from './mainFooterStyles';
</script>

<footer>
	<div class={S.Footer}>
		<div class={S.Content}>
			<h3>
				<span>Lotus</span>Solutions
			</h3>
			<p>Be the Reason Customers Define Experience Differently</p>
			<Socials />
		</div>

		{#each resources as resource}
			<div class={S.Resource}>
				<h4>{resource.heading}</h4>
				<ul>
					{#each resource.links as link}
						{#if link.icon}
							<li class={S.ContactInfo}>
								<img src={link.icon} alt={link.alt} />
								<p>{link.text}</p>
							</li>
						{:else}
							<li>
								<a href={link.href}>{link.text}</a>
							</li>
						{/if}
					{/each}
				</ul>
			</div>
		{/each}
	</div>
</footer>
