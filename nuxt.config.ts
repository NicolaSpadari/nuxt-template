import AutoImport from "unplugin-auto-import/vite";

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
                { name: "theme-color", content: "#1b1b1b" },
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
