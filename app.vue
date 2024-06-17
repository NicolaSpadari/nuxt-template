<template>
	<Html min-h-screen>
		<Body overflow-x-hidden>
			<NuxtPage />
		</Body>
	</Html>
</template>

<style lang="scss">
	html {
		-webkit-tap-highlight-color: transparent;
		scroll-behavior: smooth;
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
