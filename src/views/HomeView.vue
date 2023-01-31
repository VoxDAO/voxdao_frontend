<script setup lang="ts">
import TheWelcome from "../components/TheWelcome.vue";
</script>

<template>
  <div class="intro-section">
    <div class="left-section">
      <div class="title">VOX POP</div>
      <div class="">
        Of the people, by the people, for the people.  --Abraham Lincoln
      </div>
      <div>
        VOX DAO is an anti-centralized social experiment where we want every
        voice can be heard equally.
      </div>
      <div class="btn-container">
        <div class="docs">Docs</div>
        <div class="join-us">Join us</div>
      </div>
    </div>
    <div class="right-section">
      <div >Weekly New Voxers</div>
      <div >xxxxx</div>
    </div>

  </div>
</template>

<style lang="scss" scoped>
.intro-section {
  display: flex;
  height: 100vh;
  margin: auto;
  .left-section {
    border: 1 solid black;
    flex:1;
    margin:auto;
    padding: 25px;
    .title {
      font-size: 24px;
      text-align: center;
    }
    .btn-container{
      display: flex;
      .docs{
        flex: 1;
        text-align: center;
      }
      .join-us{
        flex:1;
        text-align: center;
      } 
    }
  }
  .right-section{
    margin: auto;
    flex: 1;
  }
}
</style>
