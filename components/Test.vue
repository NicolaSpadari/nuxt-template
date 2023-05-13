<template>
    <div text-center space-y-5>
        {{ test }}
        <i-heroicons-solid-check w-5 h-5 text-blue-400 />
    </div>
</template>

<script lang="ts" setup>
    const { test } = useTest();
</script>
