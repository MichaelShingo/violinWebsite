/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./app/**/*.{js,jsx,ts,tsx}'],
	plugins: [
		require("@xpd/tailwind-3dtransforms")
	],
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
				'green-sat': '#007c00',
				'green-light': '#4cb94c',
				'green-extra-light': '#a7fab5',

			},
			backgroundImage: {
				imageIcon: 'url("/imageIcon.svg")',
			},
			animation: {
				'inch-worm': 'inch-worm s linear forwards',

			},
			keyframes: {
				'inch-worm': {
					'0%': { scaleY: '100%' },
					'10%': { scaleY: '125%' },
					'20%': { scaleY: '100%' },
					'30%': { scaleY: '125%' },
					'40%': { scaleY: '100%' },
					'50%': { scaleY: '125%' },
					'60%': { scaleY: '100%' },
					'70%': { scaleY: '125%' },
					'80%': { scaleY: '100%' },
					'90%': { scaleY: '125%' },
					'100%': { scaleY: '100%' },
				}
			},
		},
	},
	plugins: [],
};
