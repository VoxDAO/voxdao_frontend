<template>
  <section id="ProjectSection" height="400">
    <span class="left-header-title">运营活动</span>
    <div class="projects-desc desc-text-margin">
      一些简介
    </div>
    <ul class="case_card_list">
      <ParallaxCard
        v-for="item in items"
        :key="item.id"
        :data-image="item.bg"
        :item="item"
      />
    </ul>
  </section>
</template>

<script setup lang="ts">
import ParallaxCard from './ParallaxCard.vue';
import bilibili from '@/assets/img/icon-bilibili.png';
import talk from '@/assets/img/icon-talk.png';
import bmw from '@/assets/img/icon-BMW.png';
import epic from '@/assets/img/icon-epic.png';
import joyo from '@/assets/img/icon-joyo.png';

import bilibilipic from '@/assets/img/bilibili_game.png';
import talkpic from '@/assets/img/kakao.png';
import bmwpic from '@/assets/img/car_game.png';
import epicpic from '@/assets/img/epic_gamejam.png';
import joyopic from '@/assets/img/Joyo-game.png';

// import bilibilibg from '@/assets/img/cardbg/bili.png';
// import talkbg from '@/assets/img/cardbg/joyo.png';
// import bmwbg from '@/assets/img/cardbg/bmw.png';
// import epicbg from '@/assets/img/cardbg/epicgames.png';
// import joyobg from '@/assets/img/cardbg/kakao.png';

const items = [
  {
    id: '2021bili',
    href: 'https://www.bilibili.com/blackboard/activity-gamereview2021.html',
    title: '2021 Bilibili游戏大赏',
    tags: ['虚拟制片', '虚幻引擎', '3D设计'],
    desc: '承接2021 BiliBili游戏大赏虚拟制片项目，使用虚幻引擎制作虚拟场景，虚拟拍摄现场美术技术指导。',
    img: bilibilipic,
    logo: bilibili,
    color: '#5DD7E8',
    bg: 'linear-gradient(100.66deg, rgba(87, 126, 242, 0.7) 0%, rgba(9, 25, 115, 0.7) 100%)',
  },
  {
    id: '2022bmw',
    href: 'https://www.bilibili.com/video/BV1Rd4y1R7tG',
    title: '2022 宝马游戏设计',
    tags: ['游戏设计', 'UE5开发', '创意开发'],
    desc: '与BiliBili UP主合作，使用虚幻引擎+python为宝马官方制作弹幕游戏。涉及地图设计，AI地图生成，弹幕与引擎实时通讯。',
    img: bmwpic,
    logo: bmw,
    color: '#E813BA',
    bg: 'linear-gradient(100.66deg, rgba(229, 159, 237, 0.7) 0%, rgba(203, 114, 111, 0.7) 100%)',
  },
  {
    id: 'joyo',
    href: 'https://cubyfun.com/#/',
    title: 'Joyo创意品牌设计',
    tags: ['影视制作', '3D艺术', 'KV特效'],
    desc: '负责宣传物设计，宣传片导演+拍摄，效果图制作，以及运营物料筹备，帮助Joyo在Kickstaters获得30K+的社区投资',
    img: joyopic,
    logo: joyo,
    color: '#2AD998',
    bg: 'linear-gradient(100.66deg, rgba(201, 155, 37, 0.7) 0%, rgba(98, 172, 140, 0.7) 100%)',
  },
  {
    id: 'epicwinner',
    href: 'https://ws-studio.itch.io/',
    title: 'EPIC GAMEJAM 赢家',
    tags: ['游戏设计', 'UE5开发', '创意开发'],
    desc: '使用虚幻引擎，Blender创作跳台+闯关类游戏，获得2018 虚幻官方GameJam全球一等奖，YouTube直播颁奖。',
    img: epicpic,
    logo: epic,
    color: '#8BA7CE',
    bg: 'linear-gradient(100.66deg, rgba(31, 75, 135, 0.7) 0%, rgba(14, 39, 86, 0.7) 100%)',
  },
  {
    id: 'kakaotalk',
    href: 'https://ws-studio.itch.io/bulb-kakao-talk',
    title: 'KaKao Talk 创意设计',
    tags: ['UE5开发', '3D艺术', '游戏设计'],
    desc: '使用虚幻引擎+Blender+C4D制作了一款治愈类的解密游戏，或者Kakao Talk 2020设计征集大赛大中华地区一等奖。',
    img: talkpic,
    logo: talk,
    color: '#FFAF18',
    bg: 'linear-gradient(100.66deg, rgba(228, 190, 57, 0.7) 0%, rgba(188, 104, 27, 0.7) 100%)',
  },
];
</script>

<style scoped lang="scss">
@import '@/styles/ProjectSection.scss';
</style>
