import type { RouteRecordRaw } from "vue-router";

export interface INavRoute {
  name: string
  path: string
  label: string
}

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
      label: "home",
      showInNav: true,
    },
  },
  {
    path: "/projects",
    name: "projects",
    component: () => import("@/pages/ProjectsPage.vue"),
    meta: {
      label: "projects",
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

export const navItems: INavRoute[] = routes
  .filter((route) => route.meta?.showInNav && route.name)
  .map((route) => ({
    name: route.name as string,
    path: route.path as string,
    label: route.meta?.label as string,
  }));
