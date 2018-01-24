import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    people: [
    { 
      id: 1,
      name: "A",
      birthday: "12-01-1995",
      score: 10
    },
    { 
      id: 2,
      name: "D",
      birthday: "12-01-1994",
      score: 7
    },
    { 
      id: 3,
      name: "B",
      birthday: "12-01-1996",
      score: 8
    },
    { 
      id: 4,
      name: "E",
      birthday: "12-01-1993",
      score: 9
    },
    { 
      id: 5,
      name: "C",
      birthday: "12-01-1997",
      score: 10
    },
    ]
  },
  mutations: {
    updateList(state, newPerson) {
      for (var i = 0; i < state.people.length; i++) {
        if (state.people[i].id === newPerson.id) {
          Vue.set(state.people, i, newPerson)
          console.log(state.people)
        }
      }
    }
  }
})