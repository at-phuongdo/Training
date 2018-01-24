<template>
  <div>
<!--   <b-modal id="modalInfo" ref="myModalRef" hide-footer :title="modalInfo.title" ok-only>
    <b-form>
      <h1>Edit {{modalInfo.name}}</h1>
      <b-form-input type="text" v-model="name"></b-form-input>
      <br>
      <b-form-input type="text" v-model="birthday"></b-form-input>
      <br>
      <b-form-input type="text" v-model="score"></b-form-input>
      <br>
      <b-button @click.preventDefault="updateList" variant="primary">Submit</b-button>
      <b-btn class="mt-3" variant="outline-danger" block @click="hideModal" >Close Me</b-btn>
    </b-form>
  </b-modal> -->
    <b-modal id="myModalRef" ref= "myModalRef" hide-footer title="Edit profile">
      <div class="d-block text-center">
        <b-form>
          <h1>Edit {{modalInfo.name}}</h1>
          <b-form-input type="text" v-model="name"></b-form-input>
          <br>
          <b-form-input type="text" v-model="birthday"></b-form-input>
          <br>
          <b-form-input type="text" v-model="score"></b-form-input>
          <br>
          <b-button @click.preventDefault="updateList" variant="primary">Submit</b-button>
          <b-btn class="mt-3" variant="outline-danger" block @click="hideModal" >Close Me</b-btn>
        </b-form>
      </div>
    </b-modal>
  </div>
</template>
<script>
  export default {
    props: ['modalInfo'],
    data() {
      return {
        name: '',
        birthday:'',
        score: '',
        newPerson: {}
      }
    }, 
    methods: {
      hideModal:function() {
        this.$refs.myModalRef.hide()
      },
      updateList:function() {
        this.newPerson.id = this.modalInfo.id
        this.newPerson.name = this.name
        this.newPerson.birthday = this.birthday
        this.newPerson.score = this.score
        this.$store.commit('updateList', this.newPerson);
        this.$refs.myModalRef.hide()
      }
    },
    watch: {
      modalInfo: function(newVal) {
        this.name = newVal.name
        this.birthday = newVal.birthday
        this.score = newVal.score
      }
    }
  }

</script>