<script>
	import * as S from './heroStyles';
	let bgImgH;
</script>

<section>
	<div class={S.BackgroundImg} style="height:{bgImgH + 64}px" />

	<div class={S.Container} bind:clientHeight={bgImgH}>
		<div class={S.Content}>
			<h1>Be the Reason Customers Define <span>Experience</span> Differently</h1>
			<a class={S.CTA} href="#contact">Get Started</a>
		</div>
	</div>
</section>
