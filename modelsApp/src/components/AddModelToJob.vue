<template>
  <div class="md-layout-item">
    <form @submit.prevent="addModelToJob">
      <md-card class="md-layout-item">
        <md-card-header>
          <div class="md-title">Add Model To Job</div>
        </md-card-header>
        <md-content>
          <md-field>
            <label>Model Id</label>
            <md-input v-model="modelid"/>
          </md-field>

          <md-field>
            <label>Job Id</label>
            <md-input v-model="jobid"/>
          </md-field>
        </md-content>
        <md-card-actions>
          <md-button type="submit" class="md-raised">Add Model To Job</md-button>
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
        modelid: '',
        jobid: ''
      }
    },
    methods: {
      addModelToJob() {
        var url = "https://localhost:44368/api/Jobs/" + this.jobid + "/model/"+this.modelid;
        fetch(url, {
          method: 'POST',  // Or POST, PUT, DELETE
          body: JSON.stringify({
            modelId: this.modelid,
            jobId: this.jobid,
          }),
          credentials: 'include',
          headers: {
            'Authorization': 'Bearer ' + localStorage.getItem("token"),
            'Content-Type': 'application/json'
          }
        })
          .then(res => {
            if (res.status != 201) {
              this.statusMsg = 'Model added to job';
            } else {
              this.statusMsg = 'Error';
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
