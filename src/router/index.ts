import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/features/home/views/HomeView.vue';
import PhotosView from '@/features/photos/views/PhotosView.vue';
import VideosView from '@/features/videos/views/VideosView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/photos',
      name: 'photos',
      component: PhotosView,
    },
    {
      path: '/videos',
      name: 'videos',
      component: VideosView,
    },
  ],
});

export default router;
