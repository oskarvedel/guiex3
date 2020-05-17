<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/login">Log In</router-link> |
      <router-link to="/CreateNewModel">Create New Model</router-link> |
      <router-link to="/CreateNewManager">Create New Manager</router-link> |
      <router-link to="/CreateNewJob">Create NewJ ob</router-link> |
      <router-link to="/JobView">Job View</router-link> |
      <router-link to="/DeleteModel">Delete Model</router-link> |
      <router-link to="/AddExpenditure">Add Expenditure</router-link>|
      <router-link to="/AddModelToJob">Add Model To Job</router-link> |
      <router-link to="/DeleteModelFromJob">Delete Model From Job</router-link>
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

