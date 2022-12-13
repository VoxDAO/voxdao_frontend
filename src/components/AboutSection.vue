<template>
  <section id="AboutSection" height="405">
    <span class="left-header-title">我们是谁？</span>
    <div class="aboutus-desc desc-text-margin">
      我们和你一样，xxxxxx。我们曾从事
      <span>xxxxxxx</span>
      。怀揣着xxxxxxx，探索虚拟世界的无限可能。
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
    <button class="contact-button">加入我们</button>
  </section>
</template>

<style scoped lang="scss">
@import '@/styles/AboutSection.scss';
</style>
