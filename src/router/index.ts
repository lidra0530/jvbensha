// https://router.vuejs.org/zh/
import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

// 导入路由组件
import mian from '@/views/index.vue'
NProgress.configure({ showSpinner: true, parent: '#app' })

// 定义tabbar
const tabbar: Array<RouteRecordRaw> = [
  {
    path: '/home',
    name: 'home',
    component: () => import("@/views/home/index.vue"),
    meta: {
      name: "首页",
      icon: "ri-home-3-fill",
      tabbar: true,
      to: {
        name: "home"
      }
    }
  },
  {
    path: '/orderFood',
    name: 'orderFood',
    component: () => import("@/views/order-food/index.vue"),
    meta: {
      name: "点餐",
      icon: "ri-store-fill",
      tabbar: true,
      to: {
        name: "orderFood"
      }
    }
  },
  {
    path: '/mine',
    name: 'mine',
    component: () => import("@/views/mine/index.vue"),
    meta: {
      name: "我的",
      icon: "ri-user-fill",
      tabbar: true,
      to: {
        name: "mine"
      }
    }
  },
]

// 定义路由，每个路由都需要映射到一个组件
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: mian,
    redirect: "/home",
    children: tabbar
  },
  {
    path: "/charts",
    name: "charts",
    component: () => import("@/views/charts/index.vue")
  },
  {
    path: '/login',
    name: 'login',
    component: () => import("@/views/login/index.vue"),
    meta: {
      name: "登录",
      icon: "",
      to: {
        name: "charts"
      }
    }
  },
]

// 创建路由实例并传递 `routes` 配置
const router = createRouter({
  history: createWebHistory(process.env.VUE_APP_PUBLIC_PATH),
  routes,
  scrollBehavior() {
    // 始终滚动到顶部
    return { top: 0 }
  },
})

router.beforeEach((_to, _from, next) => {
  NProgress.start() // start progress bar
  if (_to.meta.requiresAuth) {
    // 说明当前页面需要登录
    if (!localStorage.getItem("token")) {
      // 没有登录 跳转登录
      next({ name: "login" })
    }
  }
  next()
})

router.afterEach(() => {
  NProgress.done() // finish progress bar
})

// 导出路由实例，并在 `main.ts` 挂载
export default router
