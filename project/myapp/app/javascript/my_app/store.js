import * as Vue from 'vue/dist/vue.common.js';
import Vuex from 'vuex/dist/vuex.esm';
Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    // initial state
    filter: {
      location: null,
      query: null,
      radius: 30,
    },
    currentUser: null
  },
  mutations: {
    addUser(state, user) {
      // gotcha: you need to copy over deep objects when assigning into store
      // we ran into this issue, as our view was not updated when we changed
      // store attributes, because we are passing modified nested filter objects around
      //  you can use the {...OBJECT} es7 operator or array.concat for copying.
      state.currentUser = {...user}
    },
  }
})