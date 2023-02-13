<template>
  <div class="grid grid-flow-row auto-rows-max grid-rows-[max-content_max-content_1fr] h-full">
    <Header />
    <router-view v-slot="{Component}">
      <KeepAlive>
        <component :is="Component" />
      </KeepAlive>
    </router-view>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from './layouts/Header.vue'
import Footer from './layouts/Footer.vue'

</script>
