<template>
  <b-container>
    <h1 class="text-center">List member</h1>
    <b-button variant="success" @click="addPerson" class="success float-right mb-5">New Member</b-button>
    <paginate name="peoplePerPage" :list="people" :per="5">
      <b-table show-empty :items="paginated('peoplePerPage')" :fields="fields" >
        <template slot="actions" slot-scope="row">
          <b-button size="sm" variant="primary" @click.stop="info(row.item)" class="mr-1">
            Info modal
          </b-button>
          <b-button size="sm" variant="danger" @click="deletePerson(row.item)">
            Delete
          </b-button>
        </template>
      </b-table>
    </paginate>
    <div class="paginate">
      <paginate-links for="peoplePerPage" :limit="2" :show-step-links="true" class="pagination" align="center"></paginate-links>
    </div>
    <br>

    <new-person></new-person>
    <detail-modal :information="modalInfo"></detail-modal>
  </b-container>
</template>
<script>
  import InfoModal from './InfoModal.vue'
  import NewPerson from './NewPerson.vue'
  export default {
    components: {
      'detail-modal': InfoModal,
      'new-person': NewPerson
    },
    data() {
      return {
        index: 0,
        paginate: ['peoplePerPage'],
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
        return this.$store.state.people.listPeople
      }
    },
    methods: {
      info: function(item) {
        this.modalInfo = item
        this.$root.$emit('bv::show::modal', 'myModalRef')
      },
      addPerson: function() {
        this.$root.$emit('bv::show::modal', 'newPerson')
      },
      deletePerson: function(item) {
        this.$store.dispatch("deletePerson",item.id )
      }
    }
  }
</script>

<style scope>
  .paginate {
    display: table;
    margin: auto;
  }
  .pagination a {
    color: black;
    float: left;
    padding: 8px 16px;
    text-decoration: none;
    transition: background-color .3s;
    border: 1px solid #ddd;
  }

  .pagination li.active {
    background-color: #4CAF50;
    color: white;
    border: 1px solid #4CAF50;
  }

  .pagination a:hover:not(.active) {background-color: #ddd;}
</style>

