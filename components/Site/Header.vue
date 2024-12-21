<template>
	<nav class="sticky top-0 bg-white shadow">
		<div class="crate">
			<div class="h-16 flex items-center justify-between">
				<div class="flex items-center">
					<NuxtLink to="/" class="flex-shrink-0">
						<SvgoLogo :font-controlled="false" class="mx-auto size-10 text-green" />
					</NuxtLink>
					<div class="hidden" sm="ml-6 block">
						<ul class="flex gap-x-4">
							<li v-for="page in pages" :key="page.path">
								<NuxtLink :to="page.path" class="rounded-md bg-light-200 px-3 py-2 text-sm text-gray-700 font-medium" hover="bg-light-500">
									{{ page.meta.title || page.name }}
								</NuxtLink>
							</li>
						</ul>
					</div>
				</div>
				<div class="hidden" sm="ml-6 block">
					<div class="flex items-center">
						<NuxtLink :to="links.github.url" :external="true" class="rounded-md p-1 text-gray-400" hover="text-gray-700">
							<Icon :name="links.github.icon" class="size-6" />
						</NuxtLink>
					</div>
				</div>
				<div class="flex" sm="hidden">
					<button type="button" class="flex-center rounded-md p-2 text-gray-400" hover="bg-light-500" @click="menuOpen = !menuOpen">
						<Icon v-if="menuOpen" name="heroicons-solid:x" class="size-6" />
						<Icon v-else name="heroicons-solid:bars-3" class="size-6" />
					</button>
				</div>
			</div>
		</div>

		<div v-show="menuOpen" sm="hidden">
			<ul class="px-2 pb-3 pt-2 space-y-1">
				<li v-for="page in pages" :key="page.path">
					<NuxtLink :to="page.path" class="block rounded-md bg-light-200 px-3 py-2 text-sm text-gray-700 font-medium" hover="bg-light-500">
						{{ page.meta.title }}
					</NuxtLink>
				</li>
			</ul>
		</div>
	</nav>
</template>

<script lang="ts" setup>
	const { links } = useAppConfig();
	const { getRoutes } = useRouter();
	const { menuOpen } = useUIElements();
	const routes = getRoutes();
	const pages = routes.filter((route) => route.name !== "all" && route.name !== "index");
</script>
