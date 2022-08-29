import {RouteRecordRaw} from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('src/views/Home.vue'),
  },
  {
    path: '/products',
    name: 'Products',
    component: () => import('src/views/Products.vue'),
  },
  {
    path: '/aboutUs',
    name: 'AboutUs',
    component: () => import('src/views/AboutUs.vue'),
  },
  {
    path: '/partners',
    name: 'Partners',
    component: () => import('src/views/Partners.vue'),
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: () => import('src/views/Contact.vue'),
  },
  {
    path: '/activty',
    name: 'Activty',
    component: () => import('src/views/AboutActivity.vue'),
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },

];

export default routes;
