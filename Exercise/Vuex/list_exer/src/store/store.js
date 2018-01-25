import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    people: []
  },
  mutations: {
    FETCH_PEOPLE(state, people) {
      state.people = people
    }
  },
  actions: {
    fetchPeople({ commit })  {
      Vue.http.get("http://localhost:3000/people")
      .then((response) => {
        commit("FETCH_PEOPLE", response.body);
      })
      .catch((error => {
        console.log(error.statusText)
      }))
    },
    updateList(context, newPerson ) {
     Vue.http.put("http://localhost:3000/people/" + newPerson.id, newPerson)
     .then(()=> this.dispatch('fetchPeople'))
   },
   deletePerson(context, id) {
    Vue.http.delete("http://localhost:3000/people/" + id)
    .then(()=> this.dispatch('fetchPeople'))
  }
}
})
 