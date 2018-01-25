<template>
  <b-container>
    <h1 class="text-center">List member</h1>
    <b-table show-empty :items="people" :fields="fields" >
      <template slot="actions" slot-scope="row">
        <b-button size="sm" variant="primary" @click.stop="info(row.item)" class="mr-1">
          Info modal
        </b-button>
        <b-button size="sm" variant="danger" @click="deletePerson(row.item)">
          Delete
        </b-button>
      </template>
    </b-table>
    <detail-modal :information="modalInfo"></detail-modal>
  </b-container>
</template>

<script>
  import Modal from './Modal.vue'
  export default {
    components: {
      'detail-modal': Modal
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
    created() {
      this.$store.dispatch("fetchPeople")
    },
    computed: {
      people() {
        return this.$store.state.people
      }
    },
    methods: {
      info (item) {
        this.modalInfo = item
        this.$root.$emit('bv::show::modal', 'myModalRef')
      },
      deletePerson: function(item) {
        this.$store.dispatch("deletePerson",item.id )
      }
    }
  }
</script>

