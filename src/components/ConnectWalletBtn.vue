<script setup lang="ts">
defineProps<{
  title: string;
}>();
</script>

<template>
    <a>{{ title }}</a>
</template>
