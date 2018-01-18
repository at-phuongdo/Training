/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb

import Vue from 'vue/dist/vue.esm'
import TurbolinksAdapter from 'vue-turbolinks';
import App from '../components/app.vue'
import User from '../components/User.vue'
Vue.use(TurbolinksAdapter)

document.addEventListener('turbolinks:load', () => {
  // document.body.appendChild(document.createElement('app'))
  // const app = new Vue({
  //   el: 'app',
  //   template: '<App/>',
  //   components: { App }
  // });

  document.body.appendChild(document.createElement('userApp'))
  const element = document.getElementById("userApp")
  const props = JSON.parse(element.getAttribute('data'))
  if (element != null && props != null) {

    var userApp = new Vue({
      el: '#userApp',
      render: h => h(User, { props }),
    });
  }
})
