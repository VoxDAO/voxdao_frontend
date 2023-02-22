<template>
  <div class="bg-slate-900 text-slate-200 p-8 flex justify-center items-center">
    <div class="font-black m-2">{{ t("labels.faq") }}</div>
    <div class="font-black m-2">{{ t("labels.privacy") }}</div>
    <div class="font-black m-2">{{ t("labels.terms") }}</div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>
