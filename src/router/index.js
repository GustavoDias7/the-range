import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../pages/Home.vue";
import RandomWords from "../pages/RandomWords.vue";
import SpeedReading from "../pages/SpeedReading.vue";
import GuidedReading from "../pages/GuidedReading.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/random-words", name: "RandomWords", component: RandomWords },
  { path: "/speed-reading", name: "SpeedReading", component: SpeedReading },
  { path: "/guided-reading", name: "GuidedReading", component: GuidedReading },
];

const router = createRouter({ history: createWebHashHistory(), routes });

export default router;
