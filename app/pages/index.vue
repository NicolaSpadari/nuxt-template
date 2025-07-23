<template>
	<div class="py-14 flex-center flex-col gap-y-4">
		<Asset name="Logo" class="text-green size-15" />
		<h1 class="text-4xl text-dark-900 font-semibold text-center" sm="text-5xl">
			{{ labels.welcome }}
		</h1>
		<p>{{ data?.text }}</p>
	</div>
</template>

<script lang="ts" setup>
	const { labels } = useAppConfig();

	const { data } = await useFetch<MyInterface>("/api/test");
</script>
