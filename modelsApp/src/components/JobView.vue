<template>
    <div class="md-layout">
        <md-card>
            <md-card-header>
             <div class="md-title">Job List</div>
             </md-card-header>
        
            <md-card-content>
              <!--<div v-for="job in jobs" :key="job.efJobId">
                <p>{{job.customer}}</p>
              </div>-->
              <md-table>
                <md-table-row>
                  <md-table-head>Customer</md-table-head>
                  <md-table-head>Start date</md-table-head>
                  <md-table-head>Days</md-table-head>
                  <md-table-head>location</md-table-head>
                  <md-table-head>Comments</md-table-head>
                </md-table-row>
                <md-table-row v-for="job in jobs" :key="job.efJobId">
                  <md-table-cell>{{job.customer}}</md-table-cell>
                  <md-table-cell>{{job.startDate}}</md-table-cell>
                  <md-table-cell>{{job.days}}</md-table-cell>
                  <md-table-cell>{{job.location}}</md-table-cell>
                  <md-table-cell>{{job.comments}}</md-table-cell>
                </md-table-row>
              </md-table>
            </md-card-content>

        </md-card>
    </div>
</template>

<script>
  export default {
    name: 'JobList',
    data() {
      return {
        isLoading: true,
        message: '',
        jobs: []
      }
    },
    methods: {
      GetJobs() {
        fetch('https://localhost:44368/api/Jobs', {
          method: 'GET',
          credentials: 'include',
          headers: {
            'Authorization': 'Bearer ' + localStorage.getItem("token"),
            'Content-Type': 'application/json'
          }
        })
          .then(res => {
            if (res.status == 200) {
              return res.json();
            }
          })
          .then(responseJson => {
            this.jobs = responseJson;
            this.isLoading = false;
          })
          .catch(error => {
            this.isLoading = false;
            this.message = 'Something bad happened ' + error;
          });
      }
    },
    mounted() {
      this.GetJobs();
    }
  }
</script>

<style scoped >
    .md - layout {
    position: relative;
    height: 400px;
    width: 8000px;
  }
</style >
