import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import VoxWolrd from "../views/VoxWolrd.vue";
import MintNFT from "../views/MintNFT.vue";
import NFTfi from "../views/NFTfi.vue";
import CitizenForum from "../views/CitizenForum.vue";
import EventPlaza from "../views/EventPlaza.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/VoxWolrd",
      name: "VoxWolrd",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: VoxWolrd,
    },
    {
      path: "/MintNFT",
      name: "MintNFT",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: MintNFT,
    },
    {
      path: "/NFTfi",
      name: "NFTfi",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: NFTfi,
    },
    {
      path: "/CitizenForum",
      name: "CitizenForum",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: CitizenForum,
    },
    {
      path: "/EventPlaza",
      name: "EventPlaza",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: EventPlaza,
    },
  ],
});

export default router;
