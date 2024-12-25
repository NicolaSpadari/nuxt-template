<template>
	<component :is="props.type" class="text-3xl sm:text-4xl text-pretty font-bold">
		<slot />
	</component>
</template>

<script lang="ts" setup>
	const props = defineProps<{
		type: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
	}>();
</script>
