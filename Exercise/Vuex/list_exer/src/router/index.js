import Vue from 'vue'
import Router from 'vue-router'
import List from '@/components/List'
import Details from '@/components/Details'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
  {
    path: '/',
    name: 'List',
    component: List
  },
  {
    path: '/user/:name',
    name: 'user',
    component: Details
  }
  ]
})
