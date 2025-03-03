const colors = require("tailwindcss/colors");

module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
		boxShadow: {
			'custom': '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)'
		},
		scale: {
			'175': '1.75',
			'200': '2',
			'250': '2.5',
			'300': '3'
		},
		backgroundImage: {
			'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
			'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			'custom-bg': "url('/background.svg')",
		},
		colors: {
			'soft-pink': '#f7a8b8',
			'mint-green': '#98d7c2',
		}
		},
		colors: {
		...colors,
		primary: '#f7a8b8',
		secondary: '#98d7c2',
		},
	},
	plugins: [],
};
