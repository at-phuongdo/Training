<template>
  <div>
    <form-helper>
      <div slot="form-header">
        <h3>This is the title of the form</h3>
        <p>Information about the form</p>
      </div>
      <div slot="form-fields">
        <input type="text" name="" value="" placeholder="name" required>
        <input type="text" name="" value="" placeholder="password">
      </div>
      <div slot="form-controls">
        <button v-on:click="handleSubmit">Submit</button>
      </div>
    </form-helper>
  </div>
</template>

<script>
  import formHelper from './components/formHelper.vue'

  export default {
    components: {
      'form-helper' : formHelper
    },
    data() {
      return {

      }
    }, 
    methods: {
      handleSubmit() {
        
      }
      
    }

  }
</script>