const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				"primary": {
					DEFAULT: '#B74C3D', // Dark coral
					secondary: '#DE9180', // Medium coral
					light: '#ffd6c4', // Light cream
					lighter: '#FBD9D2', // Light pink
					lightest: '#EDB5A8', // Soft pink
				},
				coral: {
					900: '#B74C3D',
					800: '#DE9180',
					200: '#FEFCF2',
					100: '#FBD9D2',
					50: '#EDB5A8',
				}
			},
			fontFamily: {
				sans: ['comfortaa', 'serif'],
			},
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