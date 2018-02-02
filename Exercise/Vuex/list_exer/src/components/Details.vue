<template>
<div class="container">
    <ul>
      <li><strong>Name: </strong>{{ user.name }}</li>
      <li><strong>Birthday: </strong>{{ user.birthday }}</li>
      <li><strong>Score: </strong>{{ user.score }}</li>
    </ul>
  </div>
</template>
<script>
  export default {
    data() {
      return {
      }
    },
    created() {
      this.$store.dispatch("getUser", this.$route.params.name)
    },
    computed: {
      user() {
        return this.$store.state.people.listPeople
      }
    }
  }
</script>