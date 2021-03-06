/** @type {import('@sveltejs/kit').Config} */
import image from '@rollup/plugin-image';
import adapter from '@sveltejs/adapter-netlify';
// import adapter from '@sveltejs/adapter-static';
import path from 'path';

const config = {
	kit: {
		target: '#svelte',
		adapter: adapter(),
		// adapter: adapter(),
		vite: {
			resolve: {
				alias: {
					$assets: path.resolve('./src/assets'),
					$styles: path.resolve('./src/styles'),
					$components: path.resolve('./src/lib/components'),
					$constants: path.resolve('./src/lib/constants'),
					$site: path.resolve('./src/site')
				}
			}
		}
	},
	plugins: [image()]
};

export default config;
