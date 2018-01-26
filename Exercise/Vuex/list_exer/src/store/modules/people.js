import Vue from 'vue';
import Vuex from 'vuex';
import VueResource from 'vue-resource'

Vue.use(Vuex);
Vue.use(VueResource);
Vue.http.options.root = "http://localhost:3000/people/"

const state = {
  listPeople: []
};

const mutations = {
  FETCH_PEOPLE(state, people) {
    state.listPeople = people
  }
};

const actions = {
  fetchPeople({ commit })  {
    Vue.http.get('')
    .then((response) => {
      commit("FETCH_PEOPLE", response.body);
    })
    .catch((error => {
      console.log(error.statusText)
    }))
  },
  addPerson(context, newPerson ) {
    Vue.http.post('', newPerson)
    .then(() => this.dispatch('fetchPeople'))
  },
  updateList(context, newPerson ) {
    Vue.http.put('' + newPerson.id, newPerson)
    .then(() => this.dispatch('fetchPeople'))
  },
  deletePerson(context, id) {
    Vueue.http.delete('' + id)
    . then(() => this.dispatch('fetchPeople'))
  }
}

export default {
  state,
  mutations,
  actions
}
