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
            <b-btn variant="primary" v-b-modal.myModalRef  @click="showEdit(person, index)" >Edit</b-btn>
            <b-btn variant="danger" v-on:click="deletePerson(index)">Delete</b-btn>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- Modal -->
    <modal :person="currentPerson" v-on:update = "updateList($event)"></modal>
    <!-- /Modal -->
  </div>
</template>

<script>
  import Modal from './Modal.vue'
  export default {
    name: 'List',
    props: ['people'],
    components: {
      'modal': Modal
    },
    data() {
      return {
        fields: ['id', 'name', 'birthday', 'score', 'action'],
        index: 0,
        currentPerson: {}
      }
    },
    methods: {
      showEdit: function(person, index) {
        this.index = index
        this.currentPerson = person
      },
      updateList: function(person) {
        this.people[this.index].name = person.name
        this.people[this.index].birthday = person.birthday
        this.people[this.index].score = person.score
      },
      deletePerson: function(index) {
        this.people.splice(index, 1)
      }
    }
  }
</script>
