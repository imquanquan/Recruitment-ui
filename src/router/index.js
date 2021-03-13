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

// 挂载路由导航守卫

router.beforeEach((to, from, next) => {
  // to 将要访问的路径
  // from 代表从哪个路径来
  // next 是一个函数，表示放行

  if(to.path == '/login') return next();
  // 获取 token
  const tokenStr = window.sessionStorage.getItem('token')
  if (!tokenStr) return next('/login')
  next()
})

export default router
