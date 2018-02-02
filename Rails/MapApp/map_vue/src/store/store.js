import Vue from 'vue';
import Vuex from 'vuex';
import VueResource from 'vue-resource'

Vue.use(Vuex);
Vue.use(VueResource);
Vue.http.options.root = "http://localhost:3000/companies/"

export const store = new Vuex.Store({
  state: {
    locations: []
  },
  mutations: {
    FETCH_LOCATION(state, locations) {
      state.locations = locations
    }
  },
  actions: {
    fetchLocation: function ({ commit }) {
      Vue.http.get('')
      .then((response) => {
        commit("FETCH_LOCATION", response.body);
      })
      .catch((error => {
        console.log(error.statusText)
      }))
    }
  }
})
