import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import ResearchView from '@/views/ResearchView.vue';
import ServicesView from '@/views/ServicesView.vue';

const routes = [
  {
    path:  '/',
    name: 'Home',
    component: HomeView

  },
  {
    path: '/research',
    name: 'Research',
    component: ResearchView
  },
  {
    path : '/services',
    name : 'Services',
    component: ServicesView
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;