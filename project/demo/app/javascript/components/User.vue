<template>
  <div class="alluser">
    <ul v-for="user in users">
      <li>{{ user.firstname }} - {{ user.lastname }}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'User',
    props: ['users'],
    data() {
      return{
      }
    }
  }
</script>