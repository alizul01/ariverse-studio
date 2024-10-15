const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			screens: {
				lg: '1024px',
				xl: '1280px',
				xxl: '1536px',
			},
			maxWidth: {
				'8xl': '112rem',
			},
		},
	},
	plugins: [],
}