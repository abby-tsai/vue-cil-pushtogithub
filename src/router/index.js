import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/newpage',
    name: 'NewPage2', // 也可以使用中文名稱
    component: () => import('../views/NewPage.vue'),
    children: [
      {
        path: 'a',
        component: () => import('../views/ComponentA.vue')
      },
      {
        path: 'b',
        component: () => import('../views/ComponentB.vue')
      },
      {
        path: 'dynamicRouterByProps/:id',
        component: () => import('../views/DynamicRouterByProps.vue'),
        props: (route) => {
          console.log('route:', route)
          return {
            id: route.params.id
          }
        }
      },
      {
        path: 'dynamicRouter/:id',
        component: () => import('../views/DynamicRouter.vue')
      },
      {
        path: 'namedview',
        component: () => import('../views/NamedView.vue'),
        children: [
          {
            path: 'l2r',
            components: {
              left: () => import('../views/ComponentLeft.vue'),
              right: () => import('../views/ComponentRight.vue')
            }
          }
        ]
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
