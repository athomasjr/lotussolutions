import { injectGlobal } from '@emotion/css';

injectGlobal`
@import '@fontsource/exo-2';
@import '@fontsource/glegoo';
@import 'normalize.css';
body {
	background: linear-gradient(90deg, #ece9e6 -1.11%, #ffffff 100%);
}

html {
	font-size: 62.5%;
	box-sizing: border-box;
}

/* #svelte {
	min-height: 100vh;
	display: flex;
	flex-direction: column;
} */

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
	font-family: '';
}

h1 {
	margin-top: 0;
	font-size: 3.052rem;
	font-family: 'Exo 2';
}

small,
.text_small {
	font-size: 0.8rem;
}

a {
	text-decoration: none;
	color: inherit;
	font-family: 'Glegoo';
}

`;