<template>
	<nav class="bg-white shadow top-0 sticky">
		<div crate class="py-4">
			<div class="flex gap-x-4 items-center">
				<NuxtLink to="/" class="flex-shrink-0">
					<Asset name="Logo" class="text-green mx-auto size-10" />
				</NuxtLink>
				<ul class="flex gap-x-4">
					<li v-for="page in pages" :key="page.path">
						<NuxtLink :to="page.path" class="text-sm text-gray-700 font-medium px-3 py-2 rounded-md bg-light-200" hover="bg-light-500">
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
