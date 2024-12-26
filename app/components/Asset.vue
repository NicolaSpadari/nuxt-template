<template>
	<component :is="`Svgo${props.name}`" :font-controlled="false" />
</template>

<script lang="ts" setup>
	const props = defineProps<{
		name: string
	}>();
</script>
