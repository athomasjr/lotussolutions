export const FONTS = {
	body: 'Glegoo',
	heading: `Exo 2`
};

export const ELEVATIONS = {
	smDark: `
    0.5px 1px 1px hsl(240deg 8% 0%/ 0.7)
  `,
	mdDark: `
    1px 2px 2px hsl(240deg 8% 0%/ 0.333),
    2px 4px 4px hsl(240deg 8% 0%/ 0.333),
    3px 6px 6px hsl(240deg 8% 0%/ 0.333)
  `,
	lgDark: `
    1px 2px 2px hsl(240deg 8% 0%/ 0.2),
    2px 4px 4px hsl(240deg 8% 0%/ 0.2),
    4px 8px 8px hsl(240deg 8% 0%/ 0.2),
    8px 16px 16px hsl(240deg 8% 0%/ 0.2),
    16px 32px 32px hsl(240deg 8% 0%/ 0.2)
  `,

	smLight: `0.5px 1px 1px hsl(30deg 14% 50%  / 0.7)`,
	mdLight: `
	  1px 2px 2px hsl(30deg 14% 50% / 0.333),
    2px 4px 4px hsl(30deg 14% 50% / 0.333),
    3px 6px 6px hsl(30deg 14% 50% / 0.333)
	`,
	lgLight: `
		1px 2px 2px hsl(30deg 14% 50% / 0.2),
    2px 4px 4px hsl(30deg 14% 50% / 0.2),
    4px 8px 8px hsl(30deg 14% 50% / 0.2),
    8px 16px 16px hsl(30deg 14% 50% / 0.2),
    16px 32px 32px hsl(30deg 14% 50% / 0.2)
	`
};

export const COLORS = {
	background: {
		light: 'linear-gradient(90deg, #ece9e6 -1.11%, #ffffff 100%)',
		dark: '#2f2e38'
	},
	text: '#b8c3cc',
	primary: ' #ff715b'
};

const BREAKPOINTS = {
	phone: 37.4375, //599px
	tablet: 37.5, // 600px
	tabletLand: 56.25, // 900px
	desktop: 75, // 1200px
	bigDesktop: 96 // 1536px
};

const customMinMediaQuery = (minWidth) => `@media only screen and (min-width: ${minWidth}em)`;

const customMaxMediaQuery = (maxWidth) => `@media only screen and (max-width: ${maxWidth}em)`;

export const MEDIA_QUERIES = {
	phoneOnly: customMaxMediaQuery(BREAKPOINTS.phone),
	tabletUp: customMinMediaQuery(BREAKPOINTS.tablet),
	tabletLandUp: customMinMediaQuery(BREAKPOINTS.tabletLand),
	desktopUp: customMinMediaQuery(BREAKPOINTS.desktop),
	bigDesktopUp: customMinMediaQuery(BREAKPOINTS.bigDesktop)
};
