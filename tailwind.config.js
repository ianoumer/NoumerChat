const colors = require("tailwindcss/colors");

module.exports = {
	mode: "jit",
	purge: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
	// darkMode: "class", // or 'media' or 'class'
	theme: {
		colors: {
			gray: colors.neutral,
			red: colors.red,
		},
		screens: {
			xs: "375px",
			sm: "640px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
			"2xl": "1536px",
		},
		extend: {},
	},
	plugins: [],
};
