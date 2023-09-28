import { createRouter, createWebHistory } from 'vue-router'; 
import ProductsView from './views/Products.vue';

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/products/',
      component: ProductsView,
    },
  ],
});
