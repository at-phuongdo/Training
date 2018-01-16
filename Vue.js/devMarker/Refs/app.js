new Vue({
  el: '#vue-app',
  data: {
    output: ''
  },
  methods: {
    readRefs: function(){
      console.log(this.$refs.text.innerText);
      this.output = this.$refs.input.value
    }
  }
})