import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import "./assets/main.css";
import i18n from "./i18n";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import Vue3Toasity, { type ToastContainerOptions } from "vue3-toastify";

import "vue3-toastify/dist/index.css";

library.add(fas);

const app = createApp(App);

app.component("FontAwesomeIcon", FontAwesomeIcon);

app.use(Vue3Toasity, { autoClose: 3000 } as ToastContainerOptions);
app.use(createPinia());
app.use(router);
app.use(i18n);

app.mount("#app");
