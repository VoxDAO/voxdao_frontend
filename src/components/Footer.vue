<script setup lang="ts">
import BlueCyte from '@/assets/img/BlueCyte.svg';
import telephone from '@/assets/img/socials/telephone.svg';
import mail from '@/assets/img/socials/mail.svg';
import wechat from '@/assets/img/socials/wechat.svg';
import twitter from '@/assets/img/socials/twitter.svg';
import discord from '@/assets/img/socials/discord.svg';
import Behance from '@/assets/img/socials/Behance.svg';
import LazyImg from '@/components/LazyImage.vue';
</script>
<template>
  <section id="footer">
    <div class="footer-container">
      <div class="footer-main">
        <LazyImg :src="BlueCyte" />
      </div>
      <div class="finals">
        <div class="desc">
          CYTE lab
          是一个年轻且富有开拓精神的团队，以对虚拟世界的憧憬与梦想为起点；以无限的热情和开拓精神为动力；
          以创新与挑战为目标。如果你和我们一样，有着充满挑战的创意和不羁的灵魂，交流的大门随时为你敞开。
        </div>
        <div class="pages">
          <div class="pages-flex-items">
            <a>关于我们</a>
            <a>在招岗位</a>
            <a>联系我们</a>
            <a>隐私条款</a>
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
          <div class="pages-flex-items">
            <a class="icons" href="/">
              <LazyImg :src="telephone" />
            </a>
            <a />
            <a class="icons" href="/">
              <LazyImg :src="mail" />
            </a>
          </div>
        </div>

        <div class="bottomline-info">
          <div class="left">
            <div>
              粤ICP备2022134385号 <br/>
              有害信息举报邮箱：collab@cyte.site
            </div>
          </div>
          <div class="right">
            <div>深圳市视届科技有限公司 <br/>  © 2022, All Rights Reserved</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped lang="scss">
#footer {
  font-family: 'Glow Sans SC';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 23px;
  text-align: center;
  letter-spacing: -0.04em;
  color: #ffffff;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}
.footer-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: black;
}
.footer-main {
  padding: 24px;
}
.desc {
  margin-top: 40px;
  text-align: center;
  @media screen and (max-width: 550px) {
    margin-top: 20px;
    font-size: 10px;
    line-height: 200%;
    letter-spacing: -0.1em;
    font-weight: 400;
  }
}
.links {
  margin: 60px 0;
  width: 100%;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 550px) {
    margin-top: 30px;
  }
  .centered {
    display: flex;
    @media screen and (max-width: 550px) {
      width: 100%;
      justify-content: space-between;
    }
    .icons {
      margin-right: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      &:last-of-type {
        margin-right: 0px;
      }
    }
  }
}
.finals {
  background: black;
  width: 100%;
  padding: 0 134px 90px 134px;
  max-width: 1172px;
  @media screen and (max-width: 550px) {
    padding: 0 24px 90px 24px;
  }
}
.pages {
  margin-top: 52px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  @media screen and (max-width: 550px) {
    flex-wrap: wrap;
  }
  .pages-flex-items {
    display: flex;
    width: 100%;
    margin-top: 20px;
    @media screen and (max-width: 550px) {
    }
    a {
      font-size: 14px;
      line-height: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex: 1;
    }
  }
  .pages-flex-social-items {
    display: flex;
    width: 100%;
    margin-top: 20px;
    @media screen and (max-width: 550px) {
    }
    a {
      font-size: 14px;
      line-height: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex: 1;
    }
  }
}

.bottomline-info {
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 40px;
  // padding: 0px 20px;
  @media screen and (max-width: 550px) {
    flex-direction: row;
    font-size: 13px;
  }
  .left {
    div {
      text-align: left;
      display: inline-block;
      // margin-right: 56px;
      // &:last-of-type {
      //   margin-right: 0px;
      // }
    }
  }
  .right {
    display: flex;

    @media screen and (max-width: 550px) {
      justify-content: center;
    }
  }
}
</style>
