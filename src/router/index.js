import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: '/',
        name: 'Main',
        component: () => import('../pages/MainPage.vue'),
      },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    return savedPosition;
  } else {
    return { top: 0, behavior: "smooth" };
  }
};

router.beforeEach((to, from, next) => {
  next();
});

router.afterEach((to, from) => {
  window.scrollTo(scrollBehavior(to, from, null));
});

export default router;