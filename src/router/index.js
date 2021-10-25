import { createRouter, createWebHistory } from "vue-router"
import Home from "../views/Home.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/series",
    name: "Series",
    component: () => import("../views/Series.vue"),
  },
  {
    path: "/movies",
    name: "Movies",
    component: () => import("../views/Movies.vue"),
  },
  {
    path: "/new-popular",
    name: "NewsAndPopular",
    component: () => import("../views/NewsAndPopular.vue"),
  },
  {
    path: "/my-list",
    name: "MyList",
    component: () => import("../views/MyList.vue"),
  },
  {
    path: "/test",
    name: "test",
    component: () => import("../views/Test.vue"),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
