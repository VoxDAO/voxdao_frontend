<template>
  <div
    class="grid grid-flow-row auto-rows-max grid-rows-[max-content_max-content_1fr] h-full max-w-[2000px] m-auto"
  >
    <Header />
    <router-view v-slot="{ Component }">
      <KeepAlive>
        <component :is="Component" />
      </KeepAlive>
    </router-view>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
import Header from "./layouts/HeaderView.vue";
import Footer from "./layouts/FooterView.vue";
</script>
