// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm'
import App from './App'
import VueResource from 'vue-resource'
import router from './router'
import { store } from './store/store'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(VueResource)
Vue.use(BootstrapVue)
Vue.config.productionTip = false

/* eslint-disable no-new */

new Vue({
  store:store,
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
