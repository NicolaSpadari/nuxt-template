<template>
    <div text-center space-y-5>
        <p>{{ test }}</p>
        <i-heroicons-solid-user w-5 h-5 text-blue-400 />
    </div>
</template>

<script lang="ts" setup>
    const { test } = useTest();
</script>
