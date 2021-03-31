import Vue from 'vue'
import VueRouter from 'vue-router'
import VueAxios from 'vue-axios';
import axios from 'axios';
Vue.use(VueAxios, axios);

import App from './App.vue';
import Register from './Register.vue';
import Login from "./Login.vue";
Vue.use(VueRouter)
const routes = [
  {
    path: '/register',
    component: Register
  },
  {
    path: '/',
    component: Login
  }

];
const router = new VueRouter({ mode: 'history', routes: routes });
new Vue(Vue.util.extend({ router }, App)).$mount('#app');
