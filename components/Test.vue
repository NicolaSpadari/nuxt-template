<template>
	<div text-center space-y-5>
		{{ test }}
		<i-heroicons-solid-check h-5 w-5 text-blue-400 />
	</div>
</template>

<script lang="ts" setup>
const { test } = useTest();
</script>
