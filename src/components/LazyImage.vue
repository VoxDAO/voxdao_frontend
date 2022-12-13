<template>
  <img :src="srcImage" />
</template>

<script>
export default {
  props: ['src'],
  data: () => ({ observer: null, intersected: false }),
  computed: {
    srcImage() {
      return this.intersected ? this.src : '';
    },
  },
  mounted() {
    this.observer = new IntersectionObserver(
      entries => {
        const image = entries[0];
        if (image.isIntersecting) {
          this.intersected = true;
          this.observer.disconnect();
        }
      },
      {
        rootMargin: '800px',
        threshold: 0.001,
      }
    );

    this.observer.observe(this.$el);
  },
  unmounted() {
    this.observer.disconnect();
  },
};
</script>
