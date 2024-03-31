import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue";
import BlogDetails from "./views/BlogDetailes.vue";

const routes = [
   {
      path: "/",
      name: "Home",
      component: Home,
   },
   {
      path: "/blog/:id",
      name: "BlogDetails",
      component: BlogDetails,
      props: true,
   },
];

const router = createRouter({
   history: createWebHistory(),
   routes,
});

export default router;
