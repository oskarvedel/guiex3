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
              <md-select v-model="ChosenJob" v-on:click="findJob">
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
      <md-card-header>
        <div>SLet den fucking model</div>
      </md-card-header>
      <md-card-content>
        <!--<div v-if ="(jobModels.models != 0)&&(jobModels.models > 0)">-->
        <md-field>
          <select v-model="ChosenModel">
            <option v-for="model in jobModels.models" :key="model.email" v-bind:value="model.email">{{model.firstName}}</option>
          </select>
        </md-field>
        <!--</div>
        <div v-else>
          <div class="md-caption">Der er sgu ingen modeller</div>
        </div>-->
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
      models: null,
      jobModels: ({
        models: []
      }),
    }),

    mounted() {
      this.loadData();
      this.findJob();
    },

    methods: {


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

        var url2 = "https://localhost:44368/api/models/";
        fetch(url2, {
        method: 'GET', // Or POST, PUT, DELETE
        credentials: 'include',
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem("token"),
            'Content-Type': 'application/json'
                  }
        }).then(responseJson => responseJson.json())
          .then(data => {this.models = data 
         }).catch(error => alert("Det går galt!" + error));

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
