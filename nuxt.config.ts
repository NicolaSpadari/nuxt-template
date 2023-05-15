import AutoImport from "unplugin-auto-import/vite";
import { colors } from "@unocss/preset-mini";

const dark800 = typeof colors?.dark === "string" ? colors?.dark : colors?.dark?.[800];

export default defineNuxtConfig({
	modules: [
		"@vueuse/nuxt",
		"@unocss/nuxt",
		"@nuxt/image-edge",
		"nuxt-svgo",
		"nuxt-security",
		"nuxt-typed-router"
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
			bodyAttrs: {
				class: "font-text"
			},
			link: [
				{ rel: "shortcut-icon", href: "/favicon.svg" }
			],
			noscript: [
				{ children: "JavaScript is required to run this project" }
			]
		}
	},
	security: {
		basicAuth: {
			name: String(process.env.AUTH_NAME),
			pass: String(process.env.AUTH_PASS),
			enabled: (Boolean(process.env.AUTH_ENABLED) && process.dev) || false,
			message: "Please login to continue"
		}
	},
	css: [
		"@unocss/reset/tailwind.css"
	],
	svgo: {
		autoImportPath: "./assets/"
	},
	vite: {
		plugins: [
			AutoImport({})
		]
	},
	vue: {
		compilerOptions: {
			isCustomElement: (tag: string) => tag.startsWith("i-")
		}
	},
	nitro: {
		prerender: {
			routes: ["/"]
		}
	},
	sourcemap: {
		server: true,
		client: false
	}
});
