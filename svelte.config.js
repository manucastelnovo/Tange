import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter(),
		alias: {
			$presentation: './src/presentation',
			$domain: './src/domain',
			$data: './src/data',
			$core: './src/core'
		},
		csrf: {
			checkOrigin: true
		},
		files: {
			routes: './src/presentation/routes'
		}
	}
};

export default config;
