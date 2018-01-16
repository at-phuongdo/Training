// glocbal component
Vue.component('greeting', {
  template: '<p> Hey there, I am {{name}}. <button v-on:click="changeName">Change names</button></p>',
  data: function() {
    return {
      name: 'Phuong'
    }
  },
  methods: {
    changeName: function() {
      this.name = 'Mario';

    }
  }
})

new Vue({
  el: '#vue-app-one'
  
});

new Vue({
  el: '#vue-app-two'
  
});

// local component
var Child = {
  template: '<div>A custom component</div>'
}

new Vue({
  components: {
    'my-component' : Child
  }
})

