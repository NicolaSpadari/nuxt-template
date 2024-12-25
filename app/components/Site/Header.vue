<template>
	<UNavigationMenu :items="items" class="justify-center" />
</template>

<script setup lang="ts">
	const items = ref([
		{
			label: "Guide",
			icon: "i-lucide-book-open",
			to: "/",
			children: [
				{
					label: "Introduction",
					description: "Fully styled and customizable components for Nuxt.",
					icon: "i-lucide-house"
				},
				{
					label: "Installation",
					description: "Learn how to install and configure Nuxt UI in your application.",
					icon: "i-lucide-cloud-download"
				},
				{
					label: "Icons",
					icon: "i-lucide-smile",
					description: "You have nothing to do, @nuxt/icon will handle it automatically."
				},
				{
					label: "Colors",
					icon: "i-lucide-swatch-book",
					description: "Choose a primary and a neutral color from your Tailwind CSS theme."
				},
				{
					label: "Theme",
					icon: "i-lucide-cog",
					description: "You can customize components by using the `class` / `ui` props or in your app.config.ts."
				}
			]
		},
		{
			label: "Composables",
			icon: "i-lucide-database",
			to: "/",
			children: [
				{
					label: "defineShortcuts",
					icon: "i-lucide-file-text",
					description: "Define shortcuts for your application.",
					to: "/"
				},
				{
					label: "useModal",
					icon: "i-lucide-file-text",
					description: "Display a modal within your application.",
					to: "/"
				},
				{
					label: "useSlideover",
					icon: "i-lucide-file-text",
					description: "Display a slideover within your application.",
					to: "/"
				},
				{
					label: "useToast",
					icon: "i-lucide-file-text",
					description: "Display a toast within your application.",
					to: "/"
				}
			]
		},
		{
			label: "Components",
			icon: "i-lucide-box",
			to: "/",
			active: true,
			children: [
				{
					label: "Link",
					icon: "i-lucide-file-text",
					description: "Use NuxtLink with superpowers.",
					to: "/"
				},
				{
					label: "Modal",
					icon: "i-lucide-file-text",
					description: "Display a modal within your application.",
					to: "/"
				},
				{
					label: "NavigationMenu",
					icon: "i-lucide-file-text",
					description: "Display a list of links.",
					to: "/"
				},
				{
					label: "Pagination",
					icon: "i-lucide-file-text",
					description: "Display a list of pages.",
					to: "/"
				},
				{
					label: "Popover",
					icon: "i-lucide-file-text",
					description: "Display a non-modal dialog that floats around a trigger element.",
					to: "/"
				},
				{
					label: "Progress",
					icon: "i-lucide-file-text",
					description: "Show a horizontal bar to indicate task progression.",
					to: "/"
				}
			]
		},
		{
			label: "GitHub",
			icon: "i-simple-icons-github",
			badge: "3.8k",
			to: "https://github.com/nuxt/ui",
			target: "_blank"
		},
		{
			label: "Help",
			icon: "i-lucide-circle-help",
			disabled: true
		}
	]);
</script>
