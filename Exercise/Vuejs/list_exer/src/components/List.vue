<template>
  <div class="container">
    <h1 class="text-center">List member</h1>
    <table class="table table-bordered">
      <thead>
        <tr>
          <th class="text-center">ID</th>
          <th class="text-center">Name</th>
          <th class="text-center">Birthday</th>
          <th class="text-center">Score</th>
          <th class="text-center">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(person, index) in people">
          <td class="text-center">{{ person.id }}</td>
          <td class="text-center">{{ person.name }}</td>
          <td class="text-center">{{ person.birthday }}</td>
          <td class="text-center">{{ person.score }}</td>
          <td class="text-center">
            <b-button variant="primary" @click="showModal(person, index)">
              Edit
            </b-button>
            <b-btn variant="danger" v-on:click="deletePerson(index)">Delete</b-btn>
          </td>
        </tr>
      </tbody>
    </table>

    <div>
      <b-modal ref="myModalRef" hide-footer title="Edit profile">
        <div class="d-block text-center">
          <b-form>
            <b-form-input type="text" v-model="name"></b-form-input>
            <br>
            <b-form-input type="text" v-model="birthday"></b-form-input>
            <br>
            <b-form-input type="text" v-model="score"></b-form-input>
            <br>
            <b-button @click.preventDefault="onSubmit" variant="primary">Submit</b-button>
            <b-btn class="mt-3" variant="outline-danger" block @click="hideModal">Close Me</b-btn>
          </b-form>
        </div>
      </b-modal>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'List',
    props: ['people'],
    data() {
      return {
        name:'',
        birthday:'',
        score: '',
        index: 0
      }
    },
    methods: {
     showModal (person, index) {
      this.$refs.myModalRef.show()
      this.index = index
      this.name = person.name
      this.birthday = person.birthday
      this.score = person.score
    },
    hideModal () {
      this.$refs.myModalRef.hide()
    },
    deletePerson(index) {
      this.people.splice(index, 1)
      console.log(this.people)
    },
    onSubmit () {
      this.people[this.index].name = this.name
      this.people[this.index].birthday = this.birthday
      this.people[this.index].score = this.score
      this.$refs.myModalRef.hide()
    }
  }
}
</script>
