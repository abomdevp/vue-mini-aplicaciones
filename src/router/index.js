import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HabitTrackerView from '../views/HabitTrackerView.vue'
import MovieFinderView from '../views/MovieFinderView.vue'
import CoffeeShopView from '../views/CoffeeShopView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/habit-tracker',
      name: 'habit-tracker',
      component: HabitTrackerView,
    },
    {
      path: '/movie-finder',
      name: 'movie-finder',
      component: MovieFinderView,
    },
    {
      path: '/coffee-shop',
      name: 'coffee-shop',
      component: CoffeeShopView,
    },
  ],
})

export default router