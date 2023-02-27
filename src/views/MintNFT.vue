<template>
  <div class="root">
    <div class="container">
      <div class="preview">dsaidojsaidsaj</div>
      <div class="btn">button</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

<style scopeds lang="scss">
.root {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  height: 100vh;

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 48px;

    .preview {
      width: clamp(2rem, 38vw, 200rem);
      aspect-ratio: 2 / 3;
      background: rgb(114 113 113);
    }
  }
}
</style>
