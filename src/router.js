import Vue from "vue";
import Router from "vue-router";
import HomeComp from './components/HomeComp'
import AboutComp from './components/AboutComp'
import WorksComp from './components/WorksComp'
import SkillComp from './components/SkillComp'


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
    {
      path: "/about",
      components: {
        default: AboutComp,
      },
    },
    {
      path: "/works",
      components: {
        default: WorksComp,
      },
    },
    {
      path: "/skill",
      components: {
        default: SkillComp,
      },
    },    
  ],
});
