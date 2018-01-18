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
        <tr v-for="person in people">
          <td class="text-center">{{ person.id }}</td>
          <td class="text-center">{{ person.name }}</td>
          <td class="text-center">{{ person.birthday }}</td>
          <td class="text-center">{{ person.score }}</td>
          <td class="text-center">
            <b-btn v-b-modal.my-modal>Edit</b-btn>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Modal Component -->
    <b-modal id="my-modal" ref="modal" title="Edit profile" @ok="handleOk" @shown="clearName">
      <form @submit.stop.prevent="handleSubmit">
        <b-form-input type="text"></b-form-input>
        <br>
        <b-form-input type="text"></b-form-input>
        <br>
        <b-form-input type="text"></b-form-input>
      </form>
    </b-modal>
  </div>

</div>
</template>

<script>
  export default {
    name: 'List',
    data() {
      return {
        people: [
        { 
          id: 1,
          name: "A",
          birthday: "12-01-1995",
          score: 10
        },
        { 
          id: 2,
          name: "D",
          birthday: "12-01-1994",
          score: 7
        },
        { 
          id: 3,
          name: "B",
          birthday: "12-01-1996",
          score: 8
        },
        { 
          id: 4,
          name: "E",
          birthday: "12-01-1993",
          score: 9
        },
        { 
          id: 5,
          name: "C",
          birthday: "12-01-1997",
          score: 10
        },
        ]
      }
    },
    methods: {
      clearName () {
        this.name = ''
      },
      handleOk (evt) {
        // Prevent modal from closing
        evt.preventDefault()
        if (!this.name) {
          alert('Please enter your name')
        } else {
          this.handleSubmit()
        }
      },
      handleSubmit () {
        this.names.push(this.name)
        this.clearName()
        this.$refs.modal.hide()
      }
    }
  }
</script>

