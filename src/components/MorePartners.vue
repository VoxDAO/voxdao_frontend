<template>
  <section id="MorePartners">
    <div class="left-header-title">更多合作伙伴</div>
    <div class="scroll-parent">
      <div class="items-container primary">
        <div v-for="item in items" :key="item.key" class="icon">
          <LazyImg :src="item.src" alt="" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import LazyImg from '@/components/LazyImage.vue';
import bilibili from '@/assets/img/icon-bilibili.png';
import talk from '@/assets/img/icon-talk.png';
import bmw from '@/assets/img/icon-BMW.png';
import epic from '@/assets/img/icon-epic.png';
import unity from '@/assets/img/icon-unity.png';
import joyo from '@/assets/img/icon-joyo.png';

const items = [
  { key: 'bilibili', src: bilibili },
  { key: 'talk', src: talk },
  { key: 'bmw', src: bmw },
  { key: 'epic', src: epic },
  { key: 'unity', src: unity },
  { key: 'joyo', src: joyo },
];
</script>

<style scoped lang="scss">
@import '@/styles/MorePartners.scss';
</style>
