import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import JobHunterHome from '../components/JobHunterHome.vue'
import '../assets/css/global.css'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: 'login' },
  { path: '/login', component: Login },
  { path: '/jobhunter/home', component: JobHunterHome }
]

const router = new VueRouter({
  routes
})

export default router
