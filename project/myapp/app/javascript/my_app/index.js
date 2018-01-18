# app/javascripts/my_app/index.js
import VueRouter from 'vue-router';
import * as Vue from 'vue/dist/vue.common.js';

// Some Highcharts imports + Config
import VueHighcharts from 'vue-highcharts';
import Highcharts from 'highcharts';
import more from 'highcharts/highcharts-more'
import highchartsMore from 'highcharts/highcharts-more';
import solidGauge from 'highcharts/modules/solid-gauge';
highchartsMore(Highcharts);
solidGauge(Highcharts);
Vue.use(VueHighcharts, { Highcharts });

// adding our store and router
import store from 'my_app/store/index';
import router from 'my_app/router.js';

// attach and start the app, if there is a #app element

import App from 'my_app/component/App.vue';

document.addEventListener('DOMContentLoaded', () => {
  var i, element;
  var elements = document.querySelectorAll('#app')
  for (i = 0; i < elements.length; i++) {
        // you might want to pass some initial state, like currentUser, given params etc via data attributes
    const user = JSON.parse(element.dataset.currentUser)
    store.commit('addUser', user)
    var app = new Vue({
      el: element,
      template: '',
      router: router,
      components: { App },
      store: store,
    })
  }
})