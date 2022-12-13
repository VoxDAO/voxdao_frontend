<script setup>
import MetaVaseTitle from '@/assets/img/MetaVaseTitle.png';
import MetaVaseSlogan from '@/assets/img/MetaVaseSlogan.png';
import MetaVaseFlower from '@/assets/img/MetaVaseFlower.png';
import Vountdown from '@logustra/vountdown';
</script>
<template>
  <section id="MetaVaseSection">
    <div class="container-box">
      <div class="container-title">
        <img :src="MetaVaseSlogan" />
      </div>
      <div class="metavase-container-content"> 距离METAVASE上线还有 </div>
      <Vountdown
        v-slot="{ days, hours }"
        class="cutdown-container-content"
        style="color: white"
        tag="div"
        :time="new Date('Dec 15, 2022').getTime()"
      >
        <div>{{ days }} </div>天 <div>{{ hours }}</div> 小时
      </Vountdown>
      <div class="flower-container">
        <img class="flower-img" :src="MetaVaseFlower" />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '@/styles/MetaVaseSection.scss';
</style>
