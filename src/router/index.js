import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../pages/Home.vue";
import RandomWords from "../pages/RandomWords.vue";
import GuidedReading from "../pages/GuidedReading.vue";
import RandomQuestion from "../pages/RandomQuestion.vue";
import RandomAdvices from "../pages/RandomAdvices.vue";
import JohnPlace from "../pages/JohnPlace.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/random-words", name: "RandomWords", component: RandomWords },
  { path: "/guided-reading", name: "GuidedReading", component: GuidedReading },
  {
    path: "/random-question",
    name: "RandomQuestion",
    component: RandomQuestion,
  },
  {
    path: "/random-advices",
    name: "RandomAdvices",
    component: RandomAdvices,
  },
  {
    path: "/john-place",
    name: "JohnPlace",
    component: JohnPlace,
  },
];

const router = createRouter({ history: createWebHashHistory(), routes });

export default router;
