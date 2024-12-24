<template>
	<NuxtContainer>
		<NuxtTitle class="text-center mt-20">
			{{ labels.welcome }}
		</NuxtTitle>
	</NuxtContainer>
</template>

<script lang="ts" setup>
	const { labels } = useAppConfig();
</script>
