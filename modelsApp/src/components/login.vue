<template>
  <div class="md-layout-item">
    <form @submit.prevent="logIn">
      <md-card class="md-layout-item">
        <md-card-header>
          <div class="md-title">Log in</div>
        </md-card-header>
        <md-content>
          <md-field>
            <label>username</label>
            <md-input v-model="username"/>
          </md-field>

          <md-field>
            <label>password</label>
            <md-input v-model="password" type="password"/>
          </md-field>

        </md-content>
        <md-card-actions>
          <md-button type="submit" class="md-raised">Log in</md-button>
        </md-card-actions>
      </md-card>
    </form>
    <p>{{statusMsg}}</p>
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
      logIn() {
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
              this.statusMsg = 'Logged in';
            else {
              this.statusMsg = 'Error';
            }
          })
          .catch(error => console.error('Error:', error));
      }
    }
  }
</script>


<style scoped>
</style>
