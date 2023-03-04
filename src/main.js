import { createApp } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import App from "./App.vue";
import router from "./router";
import "@/assets/index.css";

import Notifications from 'notiwind'

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(Notifications)
  .use(router)
  .mount("#app");
