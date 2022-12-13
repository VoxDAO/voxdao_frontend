<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      app
      right
      temporary
      dark
      src="@/assets/img/bgDrawer.jpg"
    >
      <v-list>
        <v-list-item>
          <v-list-item-avatar>
            <img src="@/assets/img/logo.png" alt="Logo" />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="title">CYTE-LAB</v-list-item-title>
            <v-list-item-subtitle>WEB</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider />

      <v-list dense>
        <v-list-item
          v-for="([icon, text, link], i) in items"
          :key="i"
          link
          @click="$vuetify.goTo(link)"
        >
          <v-list-item-icon class="justify-center">
            <v-icon>{{ icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="subtitile-1">
              {{ text }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      :color="color"
      :flat="flat"
      dark
      class="px-15"
      :class="{ expand: flat }"
    >
      <v-toolbar-title>
        <v-img src="@/assets/img/logo.png" max-width="60px" />
      </v-toolbar-title>
      <v-spacer />
      <v-app-bar-nav-icon
        v-if="isXs"
        class="mr-4"
        @click.stop="drawer = !drawer"
      >
        <v-img src="../assets/img/fold.svg" max-width="30px" />
      </v-app-bar-nav-icon>
      <div v-else>
        <v-btn text @click="$vuetify.goTo('#ProjectSection')">
          <span class="mr-2">项目展示</span>
        </v-btn>
        <v-btn text @click="$vuetify.goTo('#AboutSection')">
          <span class="mr-2">关于我们</span>
        </v-btn>
        <v-btn text @click="$vuetify.goTo('#ContactSection')">
          <span class="mr-2">联系我们</span>
        </v-btn>
      </div>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  props: {
    color: String,
    flat: Boolean,
  },
  data: () => ({
    drawer: null,
    isXs: false,
    items: [
      ['mdi-home-outline', '项目展示', '#HomeSection'],
      ['mdi-information-outline', '关于我们', '#AboutSection'],
      ['mdi-download-box-outline', '联系我们', '#ContactSection'],
    ],
  }),

  watch: {
    isXs(value) {
      if (!value) {
        if (this.drawer) {
          this.drawer = false;
        }
      }
    },
  },
  mounted() {
    this.onResize();
    window.addEventListener('resize', this.onResize, { passive: true });
  },
  methods: {
    onResize() {
      this.isXs = window.innerWidth < 850;
    },
  },
};
</script>

<style scoped lang="scss">
.v-toolbar {
  transition: 0.6s;
}

.expand {
  height: 80px !important;
  padding-top: 10px;
}
</style>
