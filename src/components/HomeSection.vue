<script setup lang="ts">
// import title from '@/assets/img/title.svg';
import { ref, type Ref } from 'vue';
import { Roller } from 'vue-roller';
import 'vue-roller/dist/style.css';
</script>

<script lang="ts">
const verbs = [
  '艺术',
  '探索者',
  '冒险家',
  '逻辑',
  '诗人',
  '元宇宙',
  '大自然',
  '三维',
  '混沌',
  'AI',
  '摇滚',
  '幻想',
  '8bit',
  '赛博朋克',
  '蒸汽朋克',
  '废土',
  '像素',
  '机甲',
  '魔法',
  '重金属',
  '克苏鲁',
];

const charset = Array.from(new Set(verbs.join('').split('')));
const value: Ref<string> = ref(verbs[0]);
const getRandom = () => {
  const sel = verbs[Math.floor(Math.random() * verbs.length)];
  value.value = sel;
};

const loop = () => {
  const rand = Math.round(Math.random() * (2800 - 700)) + 700;
  setTimeout(function () {
    getRandom();
    loop();
  }, rand);
};
loop();
</script>
<template>
  <section id="HomeSection">
    <div class="container-box">
      <div class="container-title">
        <!-- <img :src="title" /> -->
        <div class="home-subtitle" @click="getRandom">
          <Roller default-value="冒险家" :value="value" :char-set="charset" />
          <span class="gradient">细胞</span>
        </div>
      </div>
      <p class="home-container-content">以灵感与热情为动力远航</p>
      <div class="home-">
        <button class="contact-button">立即联系</button>
        <button class="contact-button">立即联系</button>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import '@/styles/HomeSection.scss';
</style>
