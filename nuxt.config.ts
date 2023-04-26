import AutoImport from "unplugin-auto-import/vite";

export default defineNuxtConfig({
    modules: ["@vueuse/nuxt", "@unocss/nuxt"],
    app: {
        head: {
            title: "Nuxt template",
            charset: "utf-8",
            viewport: "width=device-width, initial-scale=1",
            meta: [
                { name: "theme-color", content: "#1b1b1b" },
                { name: "format-detection", content: "no" }
            ],
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
    vite: {
        plugins: [
            AutoImport({})
        ]
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
