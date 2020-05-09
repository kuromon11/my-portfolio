import Vue from "vue";
import Router from "vue-router";
import HomeComp from './components/HomeComp'


Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      components: {
        default: HomeComp
      }
    },
  ]
});
