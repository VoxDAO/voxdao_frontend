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
            to="/about"
            >Join Us</RouterLink
          >
          <RouterLink
            class="hover:bg-slate-700 px-6 py-2 mx-1 hover:rounded-full font-bold"
            to="/about"
            >Leekers NFT</RouterLink
          >
          <RouterLink
            class="hover:bg-slate-700 px-6 py-2 mx-1 hover:rounded-full font-bold"
            to="/about"
            >Proposals</RouterLink
          >
          <RouterLink
            class="hover:bg-slate-700 px-6 py-2 mx-1 hover:rounded-full font-bold"
            to="/about"
            >Events</RouterLink
          >
          <RouterLink
            class="hover:bg-slate-700 px-6 py-2 mx-1 hover:rounded-full font-bold"
            to="/about"
            >Connect Wallet</RouterLink
          >
        </nav>
      </div>
    </div>
  </header>
  <section class="max-w-full h-screen bg-red-900">
    <div class="flex flex-col m-auto max-w-7xl h-full">
      <div
        class="h-1/2 flex justify-center items-center text-slate-200 text-5xl font-bold tracking-wider"
      >
        Make cryptocurrency distributed again!
      </div>
      <div class="flex justify-center items-center">
        <button class="mx-10 px-6 py-3 bg-slate-200 font-bold">
          Whitpaper
        </button>
        <button class="mx-10 px-6 py-3 bg-slate-200 font-bold">
          Principles
        </button>
      </div>
    </div>
  </section>

  <div class="flex flex-col m-auto max-w-7xl min-h-full">
    <footer
      class="h-[50rem] flex items-center font-bold justify-center text-5xl"
    >
      footer
    </footer>
  </div>
</template>
