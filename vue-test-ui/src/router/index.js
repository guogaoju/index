import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import Index from '@/components/index'
// import Tatian from '@/components/Tatian'
// import Taoxin from '@/components/Taoxin'
// import Che from '@/components/Che'
// import Tangcun from '@/components/Tangcun'
// import Xihu from '@/components/Xihu'
// import Shou from '@/components/Shou'
// import Anyi from '@/components/Anyi'
// import Dao from '@/components/Dao'
Vue.use(Router)
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
export default new Router({
  routes: [
    {
      path: '/Dao',
      name: 'Dao',
      component: () => import('@/components/Dao.vue'),
      children:[
        {
          path: '/Shou',
          component: () => import('@/components/Shou.vue'),
        },
      {
        path: '/Tatian',
        component: () => import('@/components/Tatian.vue'),
      },
      {
        path: '/Taoxin',
        component: () => import('@/components/Taoxin.vue'),
      },
      {
        path: '/Tangcun',
        component: () => import('@/components/Tangcun.vue'),
      },
      {
        path: '/Xihu',
        component: () => import('@/components/Xihu.vue'),
      },
      {
        path: '/Index',
        component: () => import('@/components/Index.vue'),
      },
      {
        path: '/Anyi',
        component: () => import('@/components/Anyi.vue'),
      }]
      ,
    },
    {
      path: '/',
      component: () => import('@/components/Shou.vue')
    },
    {
      path: '/Che',
      component: () => import('@/components/Che.vue'),
    },
  ]
})
