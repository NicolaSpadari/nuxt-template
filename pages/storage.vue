<template>
	<div>
		<pre>{{ data }}</pre>
	</div>
</template>

<script lang="ts" setup>
	const { neonClient } = useNeon();
	const data = await neonClient("SELECT * FROM demo");
</script>
