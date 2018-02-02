<template>
  <div id="map">
    {{locations}}
  </div>
</template>
<script>
export default {
  data() {
    return {
    }
  },
  created() {
    this.$store.dispatch("fetchLocation")
  },
  computed: {
    locations() {
      return this.$store.state.locations
    }
  }
}
</script>