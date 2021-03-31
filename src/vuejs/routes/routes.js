import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../Login.vue'
import Register from "../Register.vue"

Vue.use(VueRouter)

export const router = new VueRouter({
    routes: [
        {path: '/', component: Login},
        {path: '/register', component:Register }
    ]
})