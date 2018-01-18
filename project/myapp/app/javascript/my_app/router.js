// app/javascripts/my_app/router.js

import VueRouter from 'vue-router';

import IndexRoute from 'report/routes/IndexRoute'
import DetailsPage from 'report/routes/DetailsPage';

const routes = [
  { path: '/', redirect: { path: '/mix/index' }},
  { path: '/start/index', component: IndexRoute },
  { path: '/:someParam/', component: DetailsPage, props: true }
]

const router =  new VueRouter({
  routes // short for routes: routes
})
export default router;