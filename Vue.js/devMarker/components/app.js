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
});

// local component
var Child = {
  template: '<div>A custom component</div>'
}

new Vue({
  el: '#vue-app-one',
  components: {
    'my-component' : Child
  }
  
});

new Vue({
  el: '#vue-app-two'
  
});
