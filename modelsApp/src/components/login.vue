<template>
  <div class="container" style="margin-top:20px;">
    <div class="card">
      <div class="container">
        <input v-model="username" class="input" type="text" placeholder="Email">
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
        username: '',
        password: '',
        statusMsg: '', //Remove
        modelId: '' // Remove
      }
    },
    methods: {
      login() {
        fetch('https://localhost:44368/api/Account/login', {
          method: 'POST',
          body: JSON.stringify({
            email: this.username,
            password: this.password
          }),
          headers: new Headers({
            'Content-Type': 'application/json'
          })
        }).then(res => res.json())
          .then((token) => {
            localStorage.setItem("token", token.jwt);
            if (token.jwt == undefined)
              this.statusMsg = 'Unsucessful';
            else {
              this.statusMsg = 'Sucessful';
            }
          })
          .catch(error => console.error('Error:', error));
      }
    }
  }
</script>


<style scoped>

  .card {
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    width: 500px;
    border-radius: 5px;
    text-align: center;
  }
    /* On mouse-over, add a deeper shadow */
    .card:hover {
      box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }

  .input {
    margin: 5px;
  }
</style>
