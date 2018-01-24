<!-- <template>
  <div class="container">
    <h1 class="text-center">List member</h1>
    <b-table show-empty :items="people" :fields="fields" >
      <template slot="actions" slot-scope="row">
        <b-button size="sm" varient="primary" @click.stop="info(row.item, row.index, $event.target)" class="mr-1">
          Info modal
        </b-button>
        <b-button size="sm" varient="danger" @click="deletePerson">
          Delete
        </b-button>
      </template>
    </b-table>
    <modal :modalInfo="modalInfo"></modal>
 -->    <!-- <b-modal id="modalInfo" :title="modalInfo.title" ok-only>
    <pre>{{ modalInfo.name }}</pre>
    </b-modal> -->
    <!-- <modal :modalInfo="modalInfo"></modal> -->
<!--   </div>
</template> -->

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
    <modal :modalInfo="currentPerson" v-on:update = "updateList($event)"></modal>
  </div>
</template>

<script>
  import Modal from './Modal.vue'
  export default {
    components: {
      'modal': Modal
    },
    data() {
      return {
        index: 0,
        currentPerson: {},
        fields: [
        { key: 'id', label: 'ID', sortable: true },
        { key: 'name', label: 'Person name', sortable: true, 'class': 'text-center' },
        { key: 'birthday', label: 'Birthday' },
        { key: 'score', label: 'Score' },
        { key: 'actions', label: 'Actions' }
        ],
        modalInfo: { 
          id: 0, 
          name: '', 
          birthday: '', 
          score: 0 
        }
      }
    },
    computed: {
      people() {
        return this.$store.state.people
      }
    },
    methods: {
      info (item, index, button) {
        this.modalInfo.id = item.id
        this.modalInfo.name = item.name
        this.modalInfo.birthday = item.birthday
        this.modalInfo.score = item.score
        this.$root.$emit('bv::show::modal', 'modalInfo', button)
      },
      
      showEdit: function(person, index) {
        this.index = index
        this.currentPerson = person
        this.showModal = true
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
