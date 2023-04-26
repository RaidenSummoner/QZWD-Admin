import Vue from 'vue'
import VueRouter from 'vue-router'
import Homepage from '@/pages/home-page'
import category from '@/views/category-view'
import contentManager from '@/views/contentManager'
import course from '@/views/course'
import consult from '@/views/consult'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Homepage',
    component: Homepage,
    children: [{
      path: '/category',
      name: 'category',
      component: category,
      children: [{
        path: '/course',
        name: 'course',
        component: course,
      },
      {
        path: '/consult',
        name: 'consult',
        component: consult,
      },  
      {
        path: '/contentManager',
        name: 'contentManager',
        component: contentManager,
      },
      ]
    },
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
