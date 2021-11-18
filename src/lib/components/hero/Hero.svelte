<script>
	import svg from '$assets/hero-svg.svg';
	import { Container } from '$styles/utils/container';
	import * as S from './heroStyles';
	let bgImgH;
</script>

<section>
	<div class={S.BackgroundImg} style="height:{bgImgH + 64}px" />

	<div class={S.Container} bind:clientHeight={bgImgH}>
		<div class={S.Content}>
			<div>
				<h1>Bringing Dreams To Life</h1>
				<h2>Development Solutions That Bridge The Gap Between Dreams and Reality</h2>
			</div>
			<a class={S.CTA} href="#contact">Contact Us</a>
		</div>
		<div class={S.Svg}>
			<img src={svg} alt="cartooned computer" />
		</div>
	</div>
</section>
