const options = require("./config"); //options from config.js

const allPlugins = {
	typography: require("@tailwindcss/typography"),
	forms: require("@tailwindcss/forms"),
	containerQueries: require("@tailwindcss/container-queries"),
	groupPeerChecked: require("@tushargugnani/tailwind-group-peer-checked"),
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
		fontSize: {
			xs: ["0.75rem", "121%"], // 12px
			sm: ["0.875rem", "121%"], // 14px
			base: ["1rem", "121%"], // 16px
			lg: ["1.125rem", "121%"], // 18px
			xl: ["1.25rem", "121%"], // 20px
			"2xl": ["1.5rem", "121%"], // 24px
			"3xl": ["1.25rem", "121%"], // 30px
			"4xl": ["2.25rem", "121%"], // 36px
			"5xl": ["3rem", "121%"], // 48px
			"6xl": ["3.75rem", "121%"], // 60px
			"7xl": ["4.5rem", "121%"], // 72px
			"8xl": ["6rem", "121%"], // 96px
			"9xl": ["8rem", "121%"], // 128px
		},
		extend: {
			screens: {
				lge: "1100px",
				xle: "1230px", // 1230
				mde: "576px",
				lw: "480px", // 480
				low: "375px", // 375
			},
			fontFamily: {
				montserrat: "Montserrat, sans-serif",
				inter: "Inter, sans-serif",
			},
			fontSize: {
				ss: ["0.5rem", "120%"], // 8px
				ms: ["0.625rem", "120%"], // 10px
				"4ms": ["2.5rem", "120%"], // 40px
			},
			colors: {
				"wild-sand": "#F5F5F5", // body bg
				"lavender-purple": "#8B7AA8", // відтінок пурпурового → buttons
				"tall-poppy": "#B73D25", // відтінок червого
				"deep-blush": "#E358A6", // відтінок розового
				shark: "#212529", // відтінок сірого
				"dusty-gray": "#999494", // відтінок сірого
				alto: "#D9D9D9", // slider bullets
				alabaster: "#FBFBFB", // відтінок сірого
				ebb: "#efe7e7", // відтінок сірого
				goldenrod: "#FCCB71", // rating star помаранчевий
				tundora: "#424242", // відтінок сірого → text
				"royal-blue": " #5477E7", // відтінок винього → links
				"dove-gray": "#6A6969", // світло сірий → text, borders
				pomegranate: "#F03B42", // відтінок червоного → text, borders
				"waikawa-gray": "#5C78AC", // відтінок синього → text
				limeade: "#679B00", // салатовий → text
				"persian-red": "#CA392D", // відтінок червого
				"cornflower-blue": "#807FFE", // статус товару "На модераціїї"
				"japanese-laurel": "#008001", // статус товару "Опубліковано"
				pumpkin: " #FF7E23", // статус товару "Чернетка "
				"custom-gray": "#7F7F7F", // статус товару "Приховано"
				crimson: "#ED1B24", // статус товару "Відхидено"
				cerulean: "#00A3E8", // статус товару "Видалено"
				parchment: "#EFE4D2", // бежевий
				"jordy-blue": "#82BAF1", // Блакитний
				koromiko: "#FEC169", // жовтий
				"fruit-salad": "#47935D", // зелений
				punch: "#DC3836", // червоний
				coral: "#FA8446", // помаранчевий
				sunglow: "#FFC627", // укрпошта
				"pattens-blue": "#D9EBFF", // chat answer background
				

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
				// in mozilla firefox rounded shadow not work properly with width less 0.8px → need replace to border with alpha
				custom: "0 0.25rem 0.25rem 0 rgba(0, 0, 0, 0.25)",
				card: "0 0.25rem 0.25rem 0 rgba(0, 0, 0, 0.25), 0 0 0 0.0625rem #999494",
				white: "0 0 0 1px #fff",
				"dusty-gray": "0 0 0 1px #999494",
				"dusty-gray-mid": "0 0 0 0.5px #999494",
				"dusty-gray-b-mid": "0 0.5px 0 0 #999494",
				"dusty-gray-mid-inset": "inset 0 0 0 0.5px #999494",
				"dusty-gray-thin": "0 0 0 0.3px #999494",
				"dusty-gray-b-extrathin": "0 0.25px 0 0 #999494",
				"lavender-purple": "0 0 0 1px #8B7AA8",
				"lavender-purple-thin": "0 0 0 0.5px #8B7AA8",
				"lavender-purple-b-thin": "0 0.5px 0 0 #8B7AA8",
				"lavender-purple-t-thin": "0 -0.5px 0 0 #8B7AA8",
				"lavender-purple-tb-thin": "0 -0.5px 0 0 #8B7AA8, 0 0.5px 0 0 #8B7AA8",
				"lavender-purple-thin-inset": "inset 0 0 0 0.5px #8B7AA8",
				"radio-modal": "0 0 0 2px #fff",
				"cornflower-blue": "0 0 0 0.5px #807FFE", // статус товару "На модераціїї"
				"japanese-laurel": "0 0 0 0.5px #008001", // статус товару "Опубліковано"
				pumpkin: "0 0 0 0.5px #FF7E23", // статус товару "Чернетка "
				"custom-gray": "0 0 0 0.5px #7F7F7F", // статус товару "Приховано"
				crimson: "0 0 0 0.5px #ED1B24", // статус товару "Відхидено"
				cerulean: "0 0 0 0.5px #00A3E8", // статус товару "Видалено"
				shark: "0 0 0 0.5px #212529", // відтінок сірого
				tundora: "0 0 0 0.5px #424242", // відтінок сірого
				"tundora-super-thin": "0 0 0 0.1px #424242", // відтінок сірого
				"tundora-super-thin-inset": "inset 0 0 0 0.1px #424242", // відтінок сірого
				"deep-blush": "0 0 0 0.5px #E358A6", // відтінок розового
				shark: "0 0 0 0.5px #212529", // відтінок сірого
				"shark-r": "0.5px 0 0 0 #212529", // відтінок сірого
				"shark-l": "-0.5px 0 0 0 #212529", // відтінок сірого
				"shark-inset": "inset 0 0 0 0.5px #212529", // відтінок сірого
				"shark-r-inset": "inset 0.5px 0 0 0 #212529", // відтінок сірого
				"shark-l-inset": "inset -0.5px 0 0 0 #212529", // відтінок сірого
			},
			dropShadow: {
				text: "box-shadow: 0px 0.25rem 0.25rem 0px rgba(0, 0, 0, 0.25)",
				"filter-dropdown": "0px 5px 5px rgba(33, 37, 41, 0.50)",
				"slider-button": "0px 4px 4px rgba(66, 66, 66, 0.15)",
			},
			backgroundImage: {
				send: 'url("@/img/send.svg")',
				map: 'url("@/img/map.svg")',
				strelka_up: 'url("@/img/strelka_up.svg")',
				strelka_down: 'url("@/img/strelka_down.svg")',
				banner: "linear-gradient(90.77deg, #FFE6E6 1.76%, #F7CCC8 92.9%)",
				"gradient-pink": "linear-gradient(0deg, #424242, #424242), linear-gradient(90.77deg, #FFE6E6 1.76%, #F7CCC8 92.9%)",
				"gradient-pink2": "linear-gradient(118deg, #ffe6e6 0%, #f6ccc8 100%)",
			},
			borderRadius: {
				emd: "0.3125rem", // 5px
				lge: "0.625rem", // 10px
				xle: "0.9375rem", // 15px
				"2lge": "1.25rem", // 20px
				"3xle": "1.5625rem", // 25px
				"4xle": "2.1875rem", // 35px
				"6md": "2.25rem", // 36px
			},
			margin: {
				"fix-shadow": "0.0375rem", // 0.6 px,
				4.5: "1.125rem", // 18px
				5.5: "1.375rem", // 22px
				6.5: "1.625rem", // 26px
				7.5: "1.875rem", // 30px
				8.5: "2.125rem", // 34px
				9.5: "2.375rem", // 38px
				10.5: "2.625rem", // 42px
				12.5: "3.125rem", // 50px
				22: "5.5rem", // 88px
			},
			padding: {
				"fix-shadow": "0.0375rem", // 0.6 px,
				4.5: "1.125rem", // 18px
				5.5: "1.375rem", // 22px
				6.5: "1.625rem", // 26px
				7.5: "1.875rem", // 30px
				8.5: "2.125rem", // 34px
				9.5: "2.375rem", // 38px
				10.5: "2.625rem", // 42px
				12.5: "3.125rem", // 50px
				22: "5.5rem", // 88px
			},
			height: {
				4.5: "1.125rem", // 18px
				5.5: "1.375rem", // 22px
				6.5: "1.625rem", // 26px
				7.5: "1.875rem", // 30px
				8.5: "2.125rem", // 34px
				9.5: "2.375rem", // 38px
				10.5: "2.625rem", // 42px
				12.5: "3.125rem", // 50px
				13: "3.25rem", // 52px
				15: "3.75rem", // 60px
				30: "7.5rem", // 120px
				35: "8.75rem", // 140px
			},
			width: {
				4.5: "1.125rem", // 18px
				5.5: "1.375rem", // 22px
				6.5: "1.625rem", // 26px
				7.5: "1.875rem", // 30px
				8.5: "2.125rem", // 34px
				9.5: "2.375rem", // 38px
				10.5: "2.625rem", // 42px
				12.5: "3.125rem", // 50px
				13: "3.25rem", // 52px
				15: "3.75rem", // 60px
				30: "7.5rem", // 120px
				35: "8.75rem", // 140px
			},
			gap: {
				4.5: "1.125rem", // 18px
				5.5: "1.375rem", // 22px
				6.5: "1.625rem", // 26px
				7.5: "1.875rem", // 30px
				8.5: "2.125rem", // 34px
				9.5: "2.375rem", // 38px
				10.5: "2.625rem", // 42px
			},
			spacing: {
				4.5: "1.125rem", // 18px
				5.5: "1.375rem", // 22px
				6.5: "1.625rem", // 26px
				7.5: "1.875rem", // 30px
				8.5: "2.125rem", // 34px
				9.5: "2.375rem", // 38px
				10.5: "2.625rem", // 42px
				12.5: "3.125rem", // 50px
			},
		},
	},
	// plugins: [
	// 	require("@tailwindcss/typography"),
	// 	require("@tailwindcss/forms"),
	// 	require("@tailwindcss/container-queries"),
	// 	require("@tushargugnani/tailwind-group-peer-checked")],
	plugins: plugins,
};
