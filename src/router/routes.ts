import type { RouteRecordRaw } from "vue-router";

export const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "home",
    component: () => import("@/pages/HomePage.vue"),
    meta: {
      label: "Home",
      showInNav: true,
    },
  },
  {
    path: "/about",
    name: "about",
    component: () => import("@/pages/AboutPage.vue"),
    meta: {
      label: "About",
      showInNav: true,
    },
  },
  {
    path: "/projects",
    name: "projects",
    component: () => import("@/pages/ProjectsPage.vue"),
    meta: {
      label: "Projects",
      showInNav: true,
    },
  },
  {
    path: "/contacts",
    name: "contacts",
    component: () => import("@/pages/ContactsPage.vue"),
    meta: {
      label: "Contacts",
      showInNav: true,
    },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: () => import("@/pages/404Page.vue"),
    meta: {
      showInNav: false,
    },
  },
];

export const navItems = routes
  .filter((route) => route.meta?.showInNav && route.name)
  .map((route) => ({
    name: route.name as string,
    path: route.path as string,
    label: route.meta?.label as string,
  }));
