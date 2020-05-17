<template>
  <div>
  <form @submit.prevent="findJob">
    <div>
      <md-card>
        <md-card-header>
          <div class="Slet Model fra job"></div>
        </md-card-header>
        <md-card-content>
            <md-field>
              <md-select placeholder="Job" v-model="ChosenJob" v-on:click="findJob">
                <md-option disabled value="">Vælg Job</md-option>
                <md-option v-for="job in jobs" :key="job.efJobId" v-bind:value="job.efJobId">{{job.customer}}</md-option>
              </md-select>
            </md-field>
        </md-card-content>
      </md-card>
    </div>
  </form>

  <form @submit.prevent="DeleteModelFunc">
    <md-card>

      <md-card-content>
        <md-field>
          <select placeholder="Model" v-model="ChosenModel">
            <option disabled value="">Vælg Model</option>
            <option v-for="model in jobModels.models" :key="model.efModelId" v-bind:value="model.efModelId">{{model.efModelId}}</option>
          </select>
        </md-field>
       
        <md-card-actions>
          <md-button type="submit" class="md-raised">Slet Model fra Job!</md-button>
        </md-card-actions>

      </md-card-content>
    </md-card>
    
  </form>
  </div>
</template>

<script>
  export default {
    name: 'DeleteModel',
    data: () => ({
      ChosenModel: 1,
      ChosenJob: 1,
      jobs: null,
      jobModels: ({
        models: []
      }),
    }),

    mounted() {
      this.loadData();
      this.findJob();
    },

    methods: {

      DeleteModelFunc() {
         fetch("https://localhost:44368/api/jobs/" + this.ChosenJob + '/model/' + this.ChosenModel, {
             method: 'DELETE',
             credentials: 'include',
             headers: new Headers({
              'Authorization': 'Bearer ' + localStorage.getItem("token"),
              'Content-Type': 'application/json'
             })
             }).then(responseJson => responseJson.json())
               .then(data => {
                    this.jobModels = data}).catch(error => alert("Det går galt!!!" + error));
      },

      findJob()
      {
        fetch("https://localhost:44368/api/jobs/" + this.ChosenJob, {
             method: 'GET',
             credentials: 'include',
             headers: new Headers({
              'Authorization': 'Bearer ' + localStorage.getItem("token"),
              'Content-Type': 'application/json'
             })
             }).then(responseJson => responseJson.json())
               .then(data => {
                    this.jobModels = data}).catch(error => alert("Det går galt!!!" + error));
      },

      loadData() {

        //var url2 = "https://localhost:44368/api/models/";
        //fetch(url2, {
        //method: 'GET', // Or POST, PUT, DELETE
        //credentials: 'include',
        //headers: {
        //    'Authorization': 'Bearer ' + localStorage.getItem("token"),
        //    'Content-Type': 'application/json'
        //          }
        //}).then(responseJson => responseJson.json())
        //  .then(data => {this.models = data 
        // }).catch(error => alert("Det går galt!" + error));

        var url = "https://localhost:44368/api/jobs";
        fetch(url, {
        method: 'GET', // Or POST, PUT, DELETE
        credentials: 'include',
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem("token"),
            'Content-Type': 'application/json'
                  }
        }).then(responseJson => responseJson.json())
          .then(data => { this.jobs = data 
         }).catch(error => this.setState({
          isLoading: false,
          message: 'Something bad happened ' + error
        }));
      }
    }
          
  }
</script>

<style scoped>
</style>
