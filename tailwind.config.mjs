/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				cream: '#F9F7F3',
				brown: {
					900: '#292524',
					800: '#44403C',
					700: '#57534E',
				},
				green: {
					700: '#15803D',
					800: '#166534',
				},
			},
			fontFamily: {
				sans: ['Open Sans', 'system-ui', 'sans-serif'],
				display: ['Playfair Display', 'serif'],
			},
		},
	},
	plugins: [],
}