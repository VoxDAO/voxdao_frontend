<template>
  <v-list nav class="background-color">
    <v-list-item-content class="icon-container">
      <v-img class="icon" src="../assets/img/logo.png" />
    </v-list-item-content>
    <template v-for="item in items" :key="item.title">
      <div v-if="!item.items">
        <v-list-item>
          <v-list-item-icon />

          <v-list-item-content class="nav-item-container">
            <v-list-item-title class="nav-text" :style="tagTxtColor(item)">
              {{ item.title }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </div>

      <v-list-group v-else-if="item.items" v-model="item.active" no-action>
        <template #activator="{ props }">
          <v-list-item
            v-bind="props"
            :prepend-icon="item.icon"
            :title="item.title"
          />
        </template>
      </v-list-group>
    </template>
  </v-list>
</template>

<script>
export default {
  data: () => ({
    /** Drawer menu items */
    items: [
      {
        title: '主页',
        icon: 'mdi-home',
        to: { name: 'Home' },
        color: '#00C2FF',
      },

      {
        title: '花宇',
        icon: 'mdi-information',
        to: { name: 'MetaVase' },
        color: '#FFB800',
      },
    ],
  }),
  computed: {
    tagTxtColor() {
      return item => {
        return { color: `${item.color}` };
      };
    },
  },
};
</script>

<style scoped>
.icon-container {
  margin: 20px;
}
.icon {
  width: 30%;
  margin-left: 30px;
  margin-bottom: 40px;
}
.nav-item-container {
  height: 30px;
  overflow: inherit;
}
.nav-text {
  text-align: center;
  font-weight: 800;
  font-size: 36px;
  margin-top: 80px;
}
.v-list-item__content {
  align-self: center;
  grid-area: content;
  overflow: inherit;
}
.v-list-item-title {
  overflow: inherit;
}
</style>
