<template>
  <Header />
  <router-view></router-view>
  <Footer />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from './layouts/Header.vue'
import Footer from './layouts/Footer.vue'

</script>
