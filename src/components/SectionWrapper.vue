<template>
  <div class="flex flex-row">
    <div class="section-title">{{ props.title }}</div>
    <div>
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  title?: string;
}>();
</script>
