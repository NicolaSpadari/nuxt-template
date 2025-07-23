import { colors } from "@unocss/preset-mini";

const dark800 = typeof colors?.dark === "string" ? colors?.dark : colors?.dark?.[800];

export default defineNuxtConfig({
	modules: [
		"@vueuse/nuxt",
		"@unocss/nuxt",
		"@nuxt/image",
		"@nuxt/eslint",
		"@nuxt/fonts",
		"@nuxt/icon",
		"nuxt-svgo"
	],
	app: {
		head: {
			title: "Nuxt 4 template",
			charset: "utf-8",
			viewport: "width=device-width, initial-scale=1",
			meta: [
				{ name: "theme-color", content: dark800 },
				{ name: "format-detection", content: "no" }
			],
			noscript: [
				{ textContent: "JavaScript is required to run this project" }
			]
		}
	},
	css: [
		"@unocss/reset/tailwind.css"
	],
	fonts: {
		defaults: {
			weights: ["100 900"]
		}
	},
	image: {
		provider: "ipx"
	},
	icon: {
		mode: "svg"
	},
	svgo: {
		autoImportPath: "./assets/"
	},
	// imports: {
	// 	presets: [
	// 		{
	// 			from: "",
	// 			imports: [""]
	// 		}
	// 	]
	// },
	eslint: {
		config: {
			standalone: false
		}
	},
	experimental: {
		typedPages: true
	},
	future: {
		compatibilityVersion: 4
	},
	compatibilityDate: "2025-05-01"
});
