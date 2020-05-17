<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/login">login</router-link> |
      <router-link to="/CreateNewModel">CreateNewModel</router-link> |
      <router-link to="/CreateNewManager">CreateNewManager</router-link> |
      <router-link to="/CreateNewJob">CreateNewJob</router-link> |
      <router-link to="/JobView">JobView</router-link> |
      <router-link to="/DeleteModel">DeleteModel</router-link>
      <router-link to="/AddExpenditure">AddExpenditure</router-link> |
    </nav>


    <!-- component matched by the route will render here -->
    <router-view></router-view>>
  </div>
</template>

<script>
  export default {
    name: 'app',
  };
</script>

<style>
</style>

