/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: '#e2211c',
				secondary: '#C8211C',
				white: '#ffffff',
				black: '#07080a',
				accent: '#3A4256',
				neutral: '#3D4451',
			},
		},
	},
	plugins: [],
};
