<template>
	<div text-center space-y-5>
		{{ test }}
		<i-heroicons-solid-check h-5 w-5 text-blue-400 />

		<button mt-5 block mx-auto @click="setValue()">
			Update text
		</button>
	</div>
</template>

<script lang="ts" setup>
	const { test, setValue } = useTest();
</script>

<style lang="scss" scoped>
.myrule {
	@apply color-red-500 border-collapse;
}
</style>
