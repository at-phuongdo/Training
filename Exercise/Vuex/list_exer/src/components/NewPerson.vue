<template>
  <!-- <div> -->
  <b-modal id="newPerson" ref= "myModalRef" hide-footer title="New Person">
    <b-form>
      <b-form-group horizontal label="Name">
        <b-form-input type="text" v-model="newPerson.name"></b-form-input>
      </b-form-group>
      <br>
      <b-form-group horizontal label="Birthday">
        <b-form-input type="date" v-model="newPerson.birthday"></b-form-input>
      </b-form-group>
      <br>
      <b-form-group horizontal  label="score">
        <b-form-input type="number" min=0 max=10 v-model="newPerson.score"></b-form-input>
      </b-form-group>
      <br>
      <b-button @click.preventDefault="addPerson" variant="primary">Submit</b-button>
      <b-btn class="mt-3" variant="outline-danger" block @click="hideModal" >Close Me</b-btn>
    </b-form>
  </b-modal>
  <!-- </div> -->
</template>
<script>
  export default {
    data() {
      return {
        newPerson: {
         name: '',
         birthday: '',
         score: '',
       }
     }
   }, 
   methods: {
    hideModal:function() {
      this.$refs.myModalRef.hide()
    },
    addPerson:function() {
      this.newPerson.name = this.newPerson.name
      this.newPerson.birthday = this.newPerson.birthday
      this.newPerson.score = this.newPerson.score
      this.$store.dispatch('addPerson', this.newPerson)
      this.$refs.myModalRef.hide()
    }
  }
}
</script>
