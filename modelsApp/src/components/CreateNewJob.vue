<template>
  <div class="md-layout-item">
    <form @submit="createJob">
      <md-card class="md-layout-item">
        <md-card-header>
          <div class="md-title">Create New Job</div>
        </md-card-header>
        <md-content>
          <md-field>
            <label>Customer</label>
            <md-input v-model="customer"/>
          </md-field>

          <md-field>
            <label>Start Date</label>
            <md-datepicker v-model="startDate"/>
          </md-field>

          <md-field>
            <label>Days</label>
            <md-input v-model="days"/>
          </md-field>

          <md-field>
            <label>Location</label>
            <md-input v-model="location"/>
          </md-field>

          <md-field>
            <label>Comment</label>
            <md-input v-model="comment"/>
          </md-field>

        </md-content>
        <md-card-actions>
          <md-button type="submit" class="md-raised">Add New Job</md-button>
        </md-card-actions>

      </md-card>
    </form>
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
            startDate: '2020-05-17T16:05:52.257Z',
            days: this.days,
            location: this.location,
            comment: this.comment
          }),
          credentials: 'include',
          headers: {
            'Authorization': 'Bearer ' + localStorage.getItem("token"),
            'Content-Type': 'application/json'
          }
        }).then(responseJson => {
          var items = JSON.parse(responseJson);
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
</style>
