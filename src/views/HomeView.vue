<script setup lang="ts">
import { toast } from "vue3-toastify";

const clickJoinUsBtn = () => {
  toast("hahaha");
};
</script>

<template>
  <section class="max-w-full h-screen">
    <div class="flex flex-col m-auto max-w-7xl h-full">
      <div>
        <div>
          <h1 class="text-8xl font-bold">VOX POP</h1>
          <p>Of the People, by the people, for the people. --Abraham Lincoln</p>
          <p>
            VOX DAO is an anti-centralized social experiment where we want every
            one can be heard equally.
          </p>
          <div>
            <button>White Paper</button>
            <button>Join us</button>
          </div>
        </div>
        <div>
          <h2>Weekly New Voxers</h2>
          <li>#1 0xxxxxx39201i3u21jduidhuih128932189h</li>
          <li>#1 0xxxxxx39201i3u21jduidhuih128932189h</li>
          <li>#1 0xxxxxx39201i3u21jduidhuih128932189h</li>
          <li>#1 0xxxxxx39201i3u21jduidhuih128932189h</li>
          <li>#1 0xxxxxx39201i3u21jduidhuih128932189h</li>
          <li>#1 0xxxxxx39201i3u21jduidhuih128932189h</li>
        </div>
      </div>
      <!-- Join us floating button -->
      <button @click="clickJoinUsBtn">Join Us</button>
      <!-- video view -->
      <div></div>
      <!-- overview -->
      <div></div>
      <!-- origin -->
      <div></div>
      <!-- vision -->
      <div></div>
      <!-- join us -->
      <div>
        <!-- step1 -->
        <!-- step2 -->
        ...
        <!-- all community button -->
      </div>
      <!-- footer -->
      <div>footer</div>
    </div>
  </section>
</template>
