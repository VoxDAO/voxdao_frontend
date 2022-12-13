<script setup lang="ts">
import {
  computed,
  nextTick,
  onMounted,
  ref,
  watch,
  type ComputedRef,
  type Ref,
  type WritableComputedRef,
} from 'vue';
import { useTheme } from 'vuetify/lib/framework.mjs';
// Stores
import { useGlobal, useConfig } from '@/store';

// Components
import FooterPage from '@/components/Footer.vue';
import DrawerComponent from '@/components/DrawerComponent.vue';

import logo from '@/assets/logo.svg';

/** Vuetify Theme */
const theme = useTheme();

/** Global Store */
const globalStore = useGlobal();
/** Config Store */
const configStore = useConfig();

/** Title */
const title = import.meta.env.VITE_APP_TITLE || 'CYTE Lab';

/** drawer visibility */
const drawer: Ref<boolean> = ref(false);

/** loading overlay visibility */
const loading: WritableComputedRef<boolean> = computed({
  get: () => globalStore.loading,
  set: v => globalStore.setLoading(v),
});

/** Appbar progressbar value */
const progress: ComputedRef<number | null> = computed(
  () => globalStore.progress
);

/** Snackbar visibility */
const snackbar: Ref<boolean> = ref(false);

/** Snackbar text */
const snackbarText: ComputedRef<string> = computed(() => globalStore.message);

/** Toggle Dark mode */
const isDark: ComputedRef<string> = computed(() =>
  configStore.themeDark ? 'dark' : 'light'
);

/** Theme Color (Sync browser theme color to vuetify theme color) */
const themeColor: ComputedRef<string> = computed(
  () => theme.computedThemes.value[isDark.value].colors.primary
);

// When snackbar text has been set, show snackbar.
watch(
  () => globalStore.message,
  async value => {
    snackbar.value = value !== '';
    await nextTick();
  }
);

const handleSCroll = () => {
  const header = document.querySelector('.navbar-container');
  if (header) {
    if (window.scrollY > 64) {
      header.classList.add('v-toolbar-background');
      header.classList.remove('v-toolbar-padding');
    } else {
      header.classList.remove('v-toolbar-background');
      header.classList.add('v-toolbar-padding');
    }
  }
};
window.addEventListener('scroll', handleSCroll);

// When loading overlay value change, force redraw screen.
watch(loading, async () => nextTick());

onMounted(() => {
  document.title = title;
  loading.value = false;
});
</script>

<template>
  <v-app class="v-app-theme" :theme="isDark">
    <v-navigation-drawer v-model="drawer" temporary app class="navbar-bg">
      <drawer-component />
    </v-navigation-drawer>
    <v-app-bar app class="navbar-container" @scroll="handleSCroll">
      <a href="/">
        <v-app-bar-title class="app-bar-logo" tag="h1">
          <img src="./assets/img/cyte.svg" />
        </v-app-bar-title>
      </a>
      <v-spacer />
      <a class="nav gradient">首页</a>
      <a class="nav">加入我们</a>
      <a class="nav gradient-orange" href="/metavase">LEEKER NFT</a>
      <a class="nav gradient">提案</a>
      <a class="nav gradient">最新活动</a>
      <v-app-bar-nav-icon @click="drawer = !drawer">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.66675 9.3335H25.3334"
            stroke="#CCD2E3"
            stroke-width="2"
            stroke-linecap="round"
          />
          <path
            d="M6.66675 16H25.3334"
            stroke="#CCD2E3"
            stroke-width="2"
            stroke-linecap="round"
          />
          <path
            d="M6.66675 22.6665H25.3334"
            stroke="#CCD2E3"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>
      </v-app-bar-nav-icon>
      <v-progress-linear
        v-show="loading"
        :active="loading"
        :indeterminate="progress === null"
        :value="progress"
        absolute
        bottom
        color="blue accent-3"
      />
    </v-app-bar>

    <v-main>
      <router-view v-slot="{ Component, route }">
        <component :is="Component" :key="route.path" />
      </router-view>
    </v-main>

    <v-overlay v-model="loading" app class="justify-center align-center">
      <v-progress-circular indeterminate size="64" />
    </v-overlay>

    <!-- <v-snackbar v-model="snackbar" app @update:model-value="onSnackbarChanged">
      {{ snackbarText }}
      <template #actions>
        <v-btn icon @click="onSnackbarChanged">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </template>
    </v-snackbar> -->

    <!-- <v-footer app elevation="3">
      <span class="mr-5">2022 &copy;</span>
    </v-footer> -->
    <FooterPage />
  </v-app>
  <teleport to="head">
    <meta name="theme-color" :content="themeColor" />
    <link rel="icon" :href="logo" type="image/svg+xml" />
  </teleport>
</template>

<style lang="scss">
@import '~/vuetify/lib/styles/settings';

.v-app-theme {
  background: transparent !important;
}

html {
  // Fix always scrollbar shown.
  overflow-y: auto;
  // Modern scrollbar style
  scrollbar-width: thin;
  scrollbar-color: map-get($grey, 'lighten-2') map-get($grey, 'base');
}
.navbar-bg{
  background-image: url('./assets/img/bg_navbar_menu.png');
}
body {
  background-image: url('/bg_normal.png');
  background-color: black;
  background-position: top center;
  background-size: cover;
  background-repeat: no-repeat;

  font-family: 'Glow Sans SC';
  -webkit-font-smoothing: antialiased;

  @media screen and (min-width: 1921px) {
    background-image: url('/bg_wide.png');
  }
}

::-webkit-scrollbar {
  width: 0.5rem;
  height: 0.5rem;
}

::-webkit-scrollbar-track {
  background-color: map-get($grey, 'lighten-2');
}

::-webkit-scrollbar-thumb {
  border-radius: 0.5rem;
  background-color: map-get($grey, 'base');
}

// Fixed a bug that the theme color is interrupted when scrolling
.v-application {
  overflow-y: auto;
}
</style>

<style>
.v-toolbar {
  box-shadow: none !important;
  align-items: center;
  transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
  /* padding-top: 64px; */
}
.v-toolbar-padding {
  padding-top: 64px;
}
.v-toolbar__content {
  max-width: 1172px;
}
.v-app-bar.v-toolbar:not(.v-toolbar--flat) {
  box-shadow: 0px !important;
}
.v-toolbar-title__placeholder {
  line-height: 0;
}
.v-toolbar-title__placeholder > img {
  height: 26px;
  margin-left: 34px;
}
.v-toolbar:not(.v-toolbar--flat) {
  box-shadow: none !important;
  background: transparent;
}
.v-toolbar-background {
  background: rgba(0, 0, 0, 0.5) !important;
  backdrop-filter: blur(40px);
  -webkit-backdrop-filter: blur(40px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}
.v-list-item__content {
    align-self: center;
    grid-area: content;
    overflow: inherit;
}
.v-app-bar .v-btn {
  box-shadow: none !important;
  color: white;
  font-size: 35px;
  margin-right: 40px;
}
.v-app-bar-nav-icon {
  @media screen and (min-width: 550px) {
    display: none;
  }
}

.nav {
  @media screen and (max-width: 550px) {
    display: none;
  }
  font-size: 24px;
  font-weight: 700;
  /* line-height: 64px; */
  color: white;
  margin-right: 30px;
}
.nav:last-of-type {
  margin-right: 40px;
}
.gradient-orange {
  color: orange;
}
</style>
