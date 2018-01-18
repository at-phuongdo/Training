<template>
  <div class="container">
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
          <td class="text-center"><button type="button" class="btn btn-primary">Edit</button></td>
        </tr>
      </tbody>
    </table>
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
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
