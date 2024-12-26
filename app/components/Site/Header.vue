<template>
	<nav class="sticky top-0 bg-white shadow">
		<div crate class="py-4">
			<div class="flex items-center gap-x-4">
				<NuxtLink to="/" class="flex-shrink-0">
					<Asset name="Logo" class="mx-auto size-10 text-green" />
				</NuxtLink>
				<ul class="flex gap-x-4">
					<li v-for="page in pages" :key="page.path">
						<NuxtLink :to="page.path" class="rounded-md bg-light-200 px-3 py-2 text-sm text-gray-700 font-medium" hover="bg-light-500">
							{{ page.meta.title || page.name }}
						</NuxtLink>
					</li>
				</ul>
			</div>
		</div>
	</nav>
</template>

<script lang="ts" setup>
	const { getRoutes } = useRouter();
	const routes = getRoutes();
	const pages = routes.filter((route) => route.name !== "all" && route.name !== "index");
</script>
