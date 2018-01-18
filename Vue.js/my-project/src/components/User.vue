<template>
  <div class="user">
    <ul v-for="user in users">
      <li>{{ user.firstname }} - {{ user.lastname }}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'User',
    data() {
      return {
        users: []
      }
    },
    methods: {

    },
    created() {
      this.$http.get('http://localhost:3000/users').then(function(data){
        this.users = data.body
      })
    }
  }
</script>