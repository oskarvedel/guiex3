<template>
  <div class="container" style="margin-top:20px;">
    <h2>Log in</h2>
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
            if (token.jwt != undefined)
              this.statusMsg = 'Successful';
            else {
              this.statusMsg = 'Unsuccessful';
            }
          })
          .catch(error => console.error('Error:', error));
      }
    }
  }
</script>


<style scoped>
</style>
