import Vue from "vue";
import Router from "vue-router";
import CreateNewModel from "./components/CreateNewModel.vue";
import CreateNewManager from "./components/CreateNewManager.vue";
import login from "./components/login.vue"
import Home from "./components/Home.vue"
import CreateNewJob from "./components/CreateNewJob.vue"
import JobView from "./components/JobView.vue"

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/login",
      name: "Login",
      component: login
    },
    {
      path: "/CreateNewModel",
      name: "createNewModel",
      component: CreateNewModel
    },
    {
      path: "/CreateNewManager",
      name: "createNewManager",
      component: CreateNewManager
    },
    {
      path: "/CreateNewJob",
      name: "createNewJob",
      component: CreateNewJob
    },
    {
      path: "/JobView",
      name: "jobView",
      component: JobView
    }
  ]
});
