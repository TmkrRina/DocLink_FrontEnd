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
import NewAnnouncements from './components/NewAnnouncement'
import ViewAnnouncement from './components/ViewAnnouncement'
import NewBanner from './components/NewBanner'
import NewPost from './components/NewPost'

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/user-register', component: UserRegister },
  { path: '/doctor-register', component: DoctorRegister },
  {
    path: '/dashboard',
    component: DashboardAdmin,
    props: { page: 1 },
    children: [
      { path: "", component: Dashboard },
      {
        path: '/profile',
        name: 'Profile',
        props: { page: 1 },
        component: Profile
      },
      {
        path: '/doctors',
        name: 'Doctors',
        props: { page: 3 },
        component: Doctors
      },
      {
        path: '/posts/:id',
        name: 'Post',
        props: { page: 2 },
        component: Post
      },
      {
        path: '/new-post',
        name: 'NewPost',
        props: { page: 2 },
        component: NewPost
      },
      {
        path: '/announcements',
        name: 'Announcements',
        props: { page: 5 },
        component: Announcements
      },
      {
        path: '/announcements/:id',
        name: 'Announcements',
        props: { page: 5 },
        component: ViewAnnouncement
      },
      {
        path: '/new-announcements',
        name: 'NewAnnouncements',
        props: { page: 5   },
        component: NewAnnouncements
      },
      {
        path: '/new-banner',
        name: 'NewBannerAnnouncement',
        props: { page: 7 },
        component: NewBanner
      },
    ]
  },
  {
    path: '*',
    props: { page: 5 },
    redirect: '/404'
  }
]

Vue.use(VueRouter)

export default new VueRouter({ routes });

