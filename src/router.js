import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import Login from './components/Login.vue'

const routes = [
    {path: '/', component: Home},
    {path: '/login', component: Login},
]

Vue.use(VueRouter)

export default new VueRouter({ routes });

