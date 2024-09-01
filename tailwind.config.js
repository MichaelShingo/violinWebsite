/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./app/**/*.{js,jsx,ts,tsx}'],
	darkMode: 'selector',
	theme: {
		extend: {
			colors: {
				'paper-white': '#fffdf5',
				'paper-white-sat': '#fff6b8',
				'black-trans': 'rgba(0,0,0,0.50)',
				'black-trans-1': 'rgba(0,0,0,0.75)',
				'paper-white-trans-0': 'rgba(255,253,245,0.75)',
				'paper-grey': '#e5e1d8',
				'paper-grey-dark': '#292827',
				'green-sat': '#009924',
			},
			backgroundImage: {
				imageIcon: 'url("/imageIcon.svg")',
			},
			animation: {

			},
			keyframes: {

			},
		},
	},
	plugins: [],
};
