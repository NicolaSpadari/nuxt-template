import Tailwind from "@tailwindcss/vite";

export default defineNuxtConfig({
	modules: [
		"@vueuse/nuxt",
		"@nuxt/image",
		"@nuxt/eslint",
		"@nuxt/fonts",
		"@nuxt/icon",
		"@nuxt/ui",
		"nuxt-svgo"
	],
	app: {
		head: {
			title: "Nuxt 3 template",
			charset: "utf-8",
			viewport: "width=device-width, initial-scale=1",
			meta: [
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
		"~/assets/css/main.css"
	],
	imports: {
		presets: [
			{
				from: "",
				imports: [""]
			}
		]
	},
	vite: {
		plugins: [Tailwind()]
	},
	svgo: {
		autoImportPath: "./assets/"
	},
	eslint: {
		config: {
			standalone: false
		}
	},
	future: {
		compatibilityVersion: 4
	},
	compatibilityDate: "2024-12-01"
});
