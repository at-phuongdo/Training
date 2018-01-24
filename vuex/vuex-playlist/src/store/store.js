import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    products: [
    {name:"Banana", price:20},
    {name:"Apple", price:40},
    {name:"Green Shells", price:60},
    {name:"Red Shells", price:40},
    {name:"Shiny Star", price:20},
    ]
  },
  // Truy cap du lieu state, filter
  getters: {
    saleProducts:state => {
      var saleProducts = state.products.map(product => {
        return {
          name:'**' + product.name + '**',
          price: product.price/2
        }
      });
      return saleProducts;
    }
  },
  // Lam thay doi du lieu state
  mutations: {
    reducePrice:state => {
      state.products.forEach( product => {
        product.price -= 1
      });
      console.log("pp")
    }
  },
  actions: {
    reducePrice: context => {
      setTimeout(function(){
        context.commit('reducePrice')
      },2000)
    }
  }
})