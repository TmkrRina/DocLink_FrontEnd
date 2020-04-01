import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import Login from './components/Login.vue'
import Register from './components/Register.vue'
import UserRegister from './components/UserRegister.vue'
import DoctorRegister from './components/DoctorRegister.vue'

const routes = [
    {path: '/', component: Home},
    {path: '/login', component: Login},
    {path: '/register', component: Register},
    {path: '/user-register', component: UserRegister},
    {path: '/doctor-register', component: DoctorRegister},
]

Vue.use(VueRouter)

export default new VueRouter({ routes });

