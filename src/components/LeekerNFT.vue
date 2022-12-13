<template>
  <section id="AboutSection" height="405">
    <span class="left-header-title">LEEKER NFT</span>
    <div class="aboutus-desc desc-text-margin">
      1、MINT leekerNFT获得身份； 2、申请成为志愿者或者贡献者，成为贡献者身份；
      3、成为捐赠者获得捐赠者身份
    </div>
    <div class="pages-flex-social-items">
      <a />
      <a class="icons" href="/">
        <LazyImg :src="wechat" />
      </a>
      <a class="icons" href="/">
        <LazyImg :src="discord" />
      </a>
      <a class="icons" href="/">
        <LazyImg :src="twitter" />
      </a>
      <a class="icons" href="/">
        <LazyImg :src="Behance" />
      </a>
      <a />
    </div>
    <button class="contact-button">代币经济模型</button>
  </section>
</template>

<style scoped lang="scss">
@import '@/styles/AboutSection.scss';
</style>
