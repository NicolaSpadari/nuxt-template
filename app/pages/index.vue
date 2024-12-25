<template>
	<UContainer>
		<UTitle type="h1" class="text-center mt-20">
			{{ labels.welcome }}
		</UTitle>
	</UContainer>
</template>

<script lang="ts" setup>
	const { labels } = useAppConfig();
</script>
