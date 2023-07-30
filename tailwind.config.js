const options = require("./config"); //options from config.js

const allPlugins = {
	typography: require("@tailwindcss/typography"),
	forms: require("@tailwindcss/forms"),
	containerQueries: require("@tailwindcss/container-queries"),
};

const plugins = Object.keys(allPlugins)
	.filter((k) => options.plugins[k])
	.map((k) => {
		if (k in options.plugins && options.plugins[k]) {
			return allPlugins[k];
		}
	});

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js,php}", "./resources/js/**/*.{vue,js,ts,jsx,tsx}", "./resources/view/*.{vue,js,ts,jsx,tsx}"],
	darkMode: "class",
	theme: {
		container: {
			padding: "0.9375rem",
			center: true,
			xsm: "18.75rem",
		},
		extend: {
			screens: {
				mxxl: { max: "77.4375em" }, // 1239
				mxxlg: { max: "68.75em" }, // 1100
				mxlg: { max: "63.9375em" }, // 1023
				mlg: { max: "61.9375em" }, // 991
				mmd: { max: "47.9375em" }, // 767
				mxmd: { max: "35.9375em" }, // 575
				msm: { max: "30em" }, // 480
				mlw: { max: "23.375em" }, // 374
				lw: "30em",
				low: "23.375em",
			},
			fontFamily: {
				montserrat: "Montserrat, sans-serif",
				inter: "Inter, sans-serif",
			},
			colors: {
				"wild-sand": "#F5F5F5", // body bg
				"lavender-purple": "#8B7AA8", // purple
				"tall-poppy": "#B73D25", // red
				"deep-blush": "#E358A6", // pink
				shark: "#212529", // some text color
				"dusty-gray": "#999494",
				alto: "#D9D9D9", // slider bullets
				alabaster: "#FBFBFB",
				ebb: "#efe7e7",
				goldenrod: "#FCCB71", // rating star
				tundora: "#424242",
				"royal-blue": " #5477E7",
				"dove-gray": "#6A6969",
				pomegranate: "#F03B42",
				"waikawa-gray": "#5C78AC",
				limeade: "#679B00",
				"persian-red": "#CA392D",
				
				

				//  =============== old colors =================================== //
				// нижче закоментовані кольори для того щоб не конфліктували із == //
				// стандартною схемою кольорів tailwind ========================== //

				main: "#212529",
				index: "#F5F5F5",
				back2: "#F5F5F5",
				accent: "#8B7AA8",
				accentLight: "#F2EEF9",
				light: "#F5F5F5",
				dark: "#424242",
				// gray: "#999999",
				// pink: "#F2EEF9",
				// blue: "#1437AD",
				blueText: "#5477E7",
				// red: "#B73D25",
				aqua: "#E5F5FF",
				pink2: "#E358A6",
				// green: "#679B00",

				"prod-0": "#999999",
				"prod-2": "#EE9BCA",
				"prod-4": "#722717",
				"prod-6": "#B9AFCB",
				"prod-8": "#1437AD",
				"prod-10": "#85C700",

				"prod-contrast-0": "#000000",
				"prod-contrast-2": "#000000",
				"prod-contrast-4": "#FFFFFF",
				"prod-contrast-6": "#000000",
				"prod-contrast-8": "#FFFFFF",
				"prod-contrast-10": "#000000",
			},
			boxShadow: {
				custom: "0 0.25rem 0.25rem 0 rgba(0, 0, 0, 0.25)",
				card: "0 0.25rem 0.25rem 0 rgba(0, 0, 0, 0.25), 0 0 0 0.0625rem #999494",
			},
			dropShadow: {
				text: "box-shadow: 0px 0.25rem 0.25rem 0px rgba(0, 0, 0, 0.25)",
			},
			backgroundImage: {
				send: 'url("@/img/send.svg")',
				map: 'url("@/img/map.svg")',
				strelka_up: 'url("@/img/strelka_up.svg")',
				strelka_down: 'url("@/img/strelka_down.svg")',
				banner: "linear-gradient(90.77deg, #FFE6E6 1.76%, #F7CCC8 92.9%)",
			},
			borderRadius: {
				lge: "0.625rem",
			}
		},
	},
	plugins: plugins,
};
