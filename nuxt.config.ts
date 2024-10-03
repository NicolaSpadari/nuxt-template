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
			title: "Nuxt 3 template",
			charset: "utf-8",
			viewport: "width=device-width, initial-scale=1",
			meta: [
				{ name: "theme-color", content: dark800 },
				{ name: "format-detection", content: "no" }
			],
			noscript: [
				{ children: "JavaScript is required to run this project" }
			]
		}
	},
	experimental: {
		typedPages: true
	},
	fonts: {
		defaults: {
			weights: [`${100}..${900}`]
		}
	},
	image: {
		provider: "ipx"
	},
	icon: {
		mode: "svg"
	},
	css: [
		"@unocss/reset/tailwind.css"
	],
	imports: {
		presets: [
			{
				from: "",
				imports: [""]
			}
		]
	},
	svgo: {
		autoImportPath: "./assets/"
	},
	eslint: {
		config: {
			standalone: false
		}
	},
	compatibilityDate: "2024-10-01"
});
