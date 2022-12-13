<!-- eslint-disable vue/require-prop-types -->

<template>
  <div
    ref="parallaxcard"
    class="parallaxcard-wrap"
    @mousemove="handleMouseMove"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <div class="parallaxcard" :style="[parallaxcardStyle, parallaxcardBgImage]">
      <!-- <a class="case_card" :href="item.href" :style="[parallaxcardBgTransform]"> -->
      <a class="case_card" :href="item.href">
        <div class="case_card_content">
          <div>
            <div class="case_card_header">
              <div>
                <h3 class="case_card_heading">{{ item.title }}</h3>
                <ul class="case_card_tags">
                  <li
                    v-for="tag in item.tags"
                    :key="tag"
                    class="case_card_tag"
                    :style="tagTxtColor"
                  >
                    <p>{{ tag }}</p>
                  </li>
                </ul>
              </div>
              <div class="case_card_logo_m">
                <LazyImg :src="item.logo" />
              </div>
            </div>
            <div class="case_card_desc">{{ item.desc }}</div>
          </div>
          <div class="case_card_logo">
            <LazyImg :src="item.logo" />
          </div>
        </div>
        <div class="case_card_img">
          <LazyImg :src="item.img" />
        </div>
      </a>
    </div>
  </div>
</template>
<script setup>
import LazyImg from '@/components/LazyImage.vue';
</script>
<script>
export default {
  props: ['dataImage', 'item'],
  data: () => ({
    width: 0,
    height: 0,
    mouseX: 0,
    mouseY: 0,
    mousein: false,
    mouseLeaveDelay: null,
  }),

  computed: {
    mousePX() {
      return this.mouseX / this.width;
    },
    mousePY() {
      return this.mouseY / this.height;
    },
    parallaxcardStyle() {
      const rX = this.mousePX * 3;
      const rY = this.mousePY * -3;
      return {
        transform: `rotateY(${rX}deg) rotateX(${rY}deg) scale(${
          this.mousein ? 1.02 : 1
        })`,
      };
    },
    tagTxtColor() {
      return {
        color: `${this.item.color}`,
        border: `1px solid ${this.item.color}`,
      }; // TODO: 这里有1px问题，之后改成scale(0.5)的样式
    },
    // parallaxcardBgTransform() {
    //   const tX = this.mousePX * -10;
    //   const tY = this.mousePY * -10;
    //   return {
    //     transform: `translateX(${tX}px) translateY(${tY}px)`
    //   };
    // },
    parallaxcardBgImage() {
      return {
        // backgroundImage: `url(${this.dataImage})`,
        background: this.item.bg,
        'backdrop-filter': 'blur(50px)',
        'border-radius': '30px',
      };
    },
  },
  mounted() {
    this.width = this.$refs.parallaxcard.offsetWidth;
    this.height = this.$refs.parallaxcard.offsetHeight;
  },

  methods: {
    handleMouseMove(e) {
      this.mouseX =
        e.pageX - this.$refs.parallaxcard.offsetLeft - this.width / 2;
      this.mouseY =
        e.pageY - this.$refs.parallaxcard.offsetTop - this.height / 2;
      this.mouseiness = true;
    },
    handleMouseEnter() {
      this.mousein = true;
      clearTimeout(this.mouseLeaveDelay);
    },
    handleMouseLeave() {
      this.mouseLeaveDelay = setTimeout(() => {
        this.mouseX = 0;
        this.mouseY = 0;
        this.mousein = false;
      }, 800);
    },
  },
};
</script>

<style scoped lang="scss">
.parallaxcard-wrap {
  transform: perspective(1200px);
  transform-style: preserve-3d;
  cursor: pointer;
}

.parallaxcard {
  position: relative;
  width: 100%;
  padding: 40px;
  border-radius: 30px;
  overflow: hidden;

  font-weight: 400;
  outline: none;
  transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  box-shadow: rgba(black, 0.66) 0 30px 60px 0;
  margin-bottom: 48px;
  background-size: cover;

  .case_card {
    display: flex;
    justify-content: space-between;
    text-decoration: none;

    .case_card_logo_m {
      display: none;
    }

    .case_card_content {
      max-width: 47.42%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .case_card_heading {
        font-weight: 700;
        font-size: 36px;
        line-height: 52px;
        color: #ffffff;
        margin-bottom: 26px;
        margin-top: 36px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        /* number of lines to show */
        line-clamp: 1;
        -webkit-box-orient: vertical;
      }

      .case_card_tags {
        display: flex;
        margin-bottom: 30px;
        padding-left: 0 !important;

        .case_card_tag {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          font-size: 16px;
          line-height: 30px;
          background-color: #000000;
          padding: 2px 20px;
          border-radius: 100px;
          margin-right: 10px;

          p {
            margin: 0;
          }

          &:last-of-type {
            margin-right: 0;
          }
        }
      }

      .case_card_desc {
        font-size: 20px;
        line-height: 30px;
        color: #ffffff;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        /* number of lines to show */
        line-clamp: 3;
        -webkit-box-orient: vertical;
      }

      .case_card_logo {
        max-height: 50px;

        img {
          height: 100%;
        }
      }
    }

    .case_card_img {
      max-width: 47.42%;
      max-height: 340px;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      border-radius: 15px;

      img {
        height: 100%;
      }
    }
  }

  @media screen and (max-width: 767px) {
    padding: 20px;

    .case_card {
      flex-direction: column;

      .case_card_header {
        display: flex;
        justify-content: space-between;
      }

      .case_card_logo_m {
        display: flex;
        align-items: center;

        img {
          height: 32px;
        }
      }

      .case_card_content {
        max-width: 100%;
        padding: 0px;

        .case_card_heading {
          font-size: 20px;
          line-height: 30px;
          margin-bottom: 10px;
          margin-top: 0px;
        }

        .case_card_tags {
          margin-bottom: 10px;

          .case_card_tag {
            font-size: 12px;
            line-height: 22px;
            height: 22px;
            padding: 0;
            border-radius: 100px;
            margin-right: 5px;

            p {
              scale: 0.6667;
            }
          }
        }

        .case_card_desc {
          -webkit-line-clamp: 3;
          line-clamp: 3;
          font-size: 14px;
          line-height: 20px;
          margin-bottom: 20px;
        }

        .case_card_logo {
          display: none;
        }
      }

      .case_card_img {
        max-height: 20vh;
        max-width: 100%;

        img {
          width: 100%;
        }
      }
    }
  }
}
</style>
