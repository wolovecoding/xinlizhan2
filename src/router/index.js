import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/pages/Login/Login.vue';
import Poster from "@/components/Poster/Poster.vue";


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/Login'
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
    path: '/main',
    component: ()=>import(/* webpackChunkName: "mainGroup" */ '@/pages/Main/Main.vue'),
    children:[
      {
        path:'ArrangeEdit',
        name:'arrangeEdit',
        component:()=>import(/* webpackChunkName: "mainGroup" */ '@/components/Arrange/Edit.vue')
      },
      {
        path: 'Course',
        name: 'course',
        component:()=>import(/* webpackChunkName: "mainGroup" */ '@/components/Course/Course.vue')
      },
      {
        path: 'Poster',
        name: 'poster',
        component: ()=>import(/* webpackChunkName: "mainGroup" */'@/components/Poster/Poster.vue')
      },
      {
        path: 'Check',
        name: 'check',
        component:()=>import(/* webpackChunkName: "mainGroup" */ '@/components/Reserve/Check.vue')
      },
      {
        path: 'TeacherEdit',
        name: 'teacherEdit',
        component:()=>import(/* webpackChunkName: "mainGroup" */ '@/components/Teacher/Edit.vue')
      },
      {
        path: 'EvaluateUpdate',
        name: 'evaluateUpdate',
        component:()=>import(/* webpackChunkName: "mainGroup" */ '@/components/Evaluate/Upload.vue')
      }
    ]
  }
  /*  {
      path: '/about',
      name: 'About',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/!* webpackChunkName: "about" *!/ '../pages/About.vue')
    }*/
]

//解决vue路由重复导航错误
//获取原型对象上的push函数
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
  VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const router = new VueRouter({
  mode: 'history',
  base: '/xlz/',
  routes
})

export default router