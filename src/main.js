import App from "./App.vue";
import router from "./router";
import { createApp } from "vue";
import { createPinia } from "pinia";

import WaveUI from "wave-ui";
import "wave-ui/dist/wave-ui.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faHouse,
  faArrowUpRightFromSquare,
  faRectangleXmark,
} from "@fortawesome/free-solid-svg-icons";

import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyCA6PMjhC4qGp6TcG31WXg7g3ecKk6pOP8",
  authDomain: "clubhoss.firebaseapp.com",
  projectId: "clubhoss",
  storageBucket: "clubhoss.appspot.com",
  messagingSenderId: "644659646557",
  appId: "1:644659646557:web:3358a95f45f53a7ce23db4",
  measurementId: "G-7B4SVYQ75Z",
};

// Initialize Firebase
initializeApp(firebaseConfig);

// Icons
library.add(faHouse, faArrowUpRightFromSquare, faRectangleXmark);

const app = createApp(App);

app.component("FaIcon", FontAwesomeIcon);

app.use(router);
app.use(WaveUI, { theme: "dark" });
app.use(createPinia());
app.mount("#app");
