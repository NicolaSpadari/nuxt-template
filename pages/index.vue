<template>
	<div class="flex flex-col items-center justify-center gap-y-4 py-14">
		<SvgoLogo :font-controlled="false" class="size-15 text-green" />
		<h1 class="text-center text-4xl text-dark-900 font-semibold" sm="text-5xl">
			{{ labels.welcome }}
		</h1>
	</div>
</template>

<script lang="ts" setup>
	const { labels } = useAppConfig();
</script>
