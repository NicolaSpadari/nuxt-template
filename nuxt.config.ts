export default defineNuxtConfig({
	modules: [
		"@vueuse/nuxt",
		"@nuxt/eslint",
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
	svgo: {
		autoImportPath: "./assets/"
	},
	experimental: {
		typedPages: true
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
