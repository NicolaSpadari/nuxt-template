<template>
	<Html class="smooth-scroll overflow-x-hidden">
		<Body class="font-default antialiased">
			<SiteHeader />
			<NuxtPage />
		</Body>
	</Html>
</template>

<style lang="scss">
	html {
		-webkit-tap-highlight-color: transparent;
	}
	img {
		-webkit-user-drag: none;
		@apply select-none;
	}

	// Transitions
	.fade-enter-active,
	.fade-leave-active {
		@apply transition-opacity ease-in-out duration-300;
	}
	.fade-enter-from,
	.fade-leave-to {
		@apply opacity-0;
	}
</style>
