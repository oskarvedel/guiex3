<template>
  <div class="container" style="margin-top:20px;">
    <h2>Add Model to Job</h2>
    <div class="card">
      <div class="container">
        <input v-model="username" class="input" type="text" placeholder="Model">
      </div>
      <div class="container">
        <input v-model="password" class="input" type="password" placeholder="Password">
      </div>
      <div class="container">
        <button @click="login" style="margin:5px; margin-bottom:10px">Login</button>
        <p>{{statusMsg}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        customer: '',
        startDate: '',
        days: 0,
        location: '',
        comment: ''
      }
    },
    methods: {
      createJob() {
        var url = "https://localhost:44368/api/Jobs";
        fetch(url, {
          method: 'POST',  // Or POST, PUT, DELETE
          body: JSON.stringify({
            customer: this.customer,
            startDate: this.startDate,
            days: parseInt(this.days),
            location: this.location,
            comment: this.comment
          }),
          credentials: 'include',
          headers: {
            'Authorization': 'Bearer ' + localStorage.getItem("token"),
            'Content-Type': 'application/json'
          }})
          .then(res => {
            if(res.status == 200)
            {
              this.statusMsg = 'Error';
            }
            else{
              this.statusMsg = 'Succesfully created job';
            }
          })
          .catch(error => this.setState({
            isLoading: false,
            message: 'Something bad happened ' + error
          }));
      }
    }
  }
</script>

<style scoped>
  .md-layout-item {
    position: relative;
    height: 450px;
    width: 400px;
  }
</style>
