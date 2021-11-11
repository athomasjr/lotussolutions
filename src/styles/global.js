import { injectGlobal } from '@emotion/css';
import '@fontsource/exo-2';
import '@fontsource/glegoo';
import { FONTS } from 'constants';

export const globalStyles = injectGlobal`
body {
	min-height: 100vh;
	margin: 0;
	/* background: $bg-light; */
}

html {
	font-size: 62.5%;
}

#svelte {
	min-height: 100vh;
	display: flex;
	flex-direction: column;
}

main {
	min-height: calc(100vh - 200px);
}

h1,
h2,
h3,
h4,
h5 {
	margin: 3rem 0 1.38rem;
	line-height: 1.3;
}

p {
	margin-bottom: 1rem;
	font-family: ${FONTS.body};
}

h1 {
	margin-top: 0;
	font-size: 3.052rem;
	font-family: ${FONTS.title};
}

small,
.text_small {
	font-size: 0.8rem;
}

a {
	text-decoration: none;
	color: inherit;
	font-family: ${FONTS.body};
}

`;
