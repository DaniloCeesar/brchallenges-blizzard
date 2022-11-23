const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
	content: ["./public/*.html", "./src/**/*.{html,js}"],

	darkMode: "class",

	theme: {
		fontFamily: {
			sans: ['Inter', ...defaultTheme.fontFamily.sans],
		},
		extend: {
			spacing: {
				128: "32rem",
				144: "36rem",
			},
			borderRadius: {
				"4xl": "2rem",
			},
		},
	},

	plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};