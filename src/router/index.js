import Vue from 'vue'
import VueRouter from 'vue-router'
import Homepage from '@/pages/home-page'
import category from '@/views/category-view'
import contentManager from '@/views/contentManager'
import contentImport from '@/views/contentImport'
import course from '@/views/course'
import calendar from '@/views/calendar'
import consult from '@/views/consult'
import formManager from '@/views/formManager'
import uploadContent from '@/views/uploadContent'
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
      ],
    },
    {
        path: '/calendar',
        name: 'calendar',
        component: calendar,
    },
    {
      path: '/contentImport',
      name: 'contentImport',
      component: contentImport,
      children:[{
        path: '/uploadContent',
        name: 'uploadContent',
        component: uploadContent,
      },
      {
        path: '/formManager',
        name: 'formManager',
        component: formManager,
      },
    ]
    }
    ],
   
  },
]

const router = new VueRouter({
  routes
})

export default router
