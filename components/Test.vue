<template>
	<div flex-center flex-col gap-y-5>
		<p>{{ test }}</p>
		<Icon name="heroicons-solid:check" size-5 text-blue-400 />

		<button @click="setValue()">
			Update text
		</button>
	</div>
</template>

<script lang="ts" setup>
	const { test, setValue } = useTest();
</script>
