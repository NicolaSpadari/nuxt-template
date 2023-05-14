<template>
    <NuxtPage />
</template>

<style lang="scss">
	html {
        -webkit-tap-highlight-color: transparent;
        scroll-behavior: smooth;
        @apply min-h-screen;
    }
    body {
        @apply overflow-x-hidden;
    }
    img {
        -webkit-user-drag: none;
        @apply select-none;
    }

    .custom-scrollbar{
        scrollbar-color: theme("colors.zinc.200") initial;
        scrollbar-width: thin;
        @apply overflow-overlay;
        &::-webkit-scrollbar{
            @apply w-2 h-2 pb-1;
            &-track{
                background-color: initial;
            }
            &-thumb{
                @apply bg-neutral-300 transition-colors duration-500 rounded;
            }
        }
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
