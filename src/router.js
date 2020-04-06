import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import Login from './components/Login.vue'
import Register from './components/Register.vue'
import UserRegister from './components/Form/UserRegister.vue'
import DoctorRegister from './components/Form/DoctorRegister.vue'
import DashboardAdmin from '@/components/DashboardAdmin'
import Dashboard from '@/components/Dashboard'
import Profile from '@/components/Profile'
import Doctors from '@/components/Doctors'
import Post from '@/components/Post'
import Announcements from '@/components/Announcements'

const routes = [
    {path: '/', component: Home},
    {path: '/login', component: Login},
    {path: '/register', component: Register},
    {path: '/user-register', component: UserRegister},
    {path: '/doctor-register', component: DoctorRegister},
    {
      path: '/dashboard',
      component: DashboardAdmin,
      props: { page: 1 },
      children: [
        { path: "", component: Dashboard },
        {
          path: '/profile',
          name: 'Profile',
          props: { page: 2 },
          component: Profile
        },
        {
          path: '/doctors',
          name: 'Doctors',
          props: { page: 3 },
          component: Doctors
        },
        {
          path: '/post',
          name: 'Post',
          props: { page: 2},
          component: Post
        },
      ]
    },
    {
      path: '/announcements',
      name: 'Announcements',
      props: { page: 5 },
      component: Announcements
    },
    {
      path: '*',
      props: { page: 5 },
      redirect: '/404'
    }
]

Vue.use(VueRouter)

export default new VueRouter({ routes });

