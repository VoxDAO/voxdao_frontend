<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <header class="bg-slate-900 text-slate-50 sticky top-0 max-w-full">
    <div class="flex m-auto max-w-7xl">
      <RouterLink class="px-6 py-1 mx-2" to="/">
        <div class="flex items-center shrink-0">
          <img
            alt="LeeksDAO logo"
            class="hover:brightness-200"
            src="@/assets/logo.svg"
            width="50"
            height="50"
          />
          <h1 class="text-3xl">LeeksDAO</h1>
        </div>
      </RouterLink>
      <div class="bg-slate-900 flex items-center grow justify-end">
        <nav class="max-lg:hidden text-center">
          <RouterLink
            class="hover:bg-slate-700 px-6 py-2 mx-1 hover:rounded-full font-bold"
            to="/"
            >Homepage</RouterLink
          >
          <RouterLink
            class="hover:bg-slate-700 px-6 py-2 mx-1 hover:rounded-full font-bold"
            to="/VoxWolrd"
            >VOX world</RouterLink
          >
          <RouterLink
            class="hover:bg-slate-700 px-6 py-2 mx-1 hover:rounded-full font-bold"
            to="/MintNFT"
            >Mint NFT</RouterLink
          >
          <RouterLink
            class="hover:bg-slate-700 px-6 py-2 mx-1 hover:rounded-full font-bold"
            to="/NFTfi"
            >NFTfi</RouterLink
          >
          <RouterLink
            class="hover:bg-slate-700 px-6 py-2 mx-1 hover:rounded-full font-bold"
            to="/CitizenForum"
            >Citizen Forum</RouterLink
          >
          <RouterLink
            class="hover:bg-slate-700 px-6 py-2 mx-1 hover:rounded-full font-bold"
            to="/EventPlaza"
            >Event Plaza</RouterLink
          >
        </nav>
      </div>
    </div>
  </header>
  <section class="max-w-full">
    <router-view></router-view>
  </section>

</template>
