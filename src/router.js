import { createRouter, createWebHistory } from 'vue-router'; 
import ProductsView from './views/Products.vue';
import HomeView from './views/Home.vue';
import ProductDetailView from './views/ProductDetail.vue';

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/home/',
      component: HomeView,
    },
    {
      path: '/products/',
      component: ProductsView,
    },
    {
      path: '/product/1',
      component: ProductDetailView,
    },
  ],
});
