import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import WorkshopView from "../views/WorkshopView.vue";
import StekjesView from "../views/StekjesView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/workshops",
      name: "workshops",
      component: WorkshopView,
    },
    {
      path: "/stekjes",
      name: "stekjes",
      component: StekjesView,
    },
  ],
});

export default router;
