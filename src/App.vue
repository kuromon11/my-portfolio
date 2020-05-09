<template>
  <div id=#app>
    <Header></Header>
    <HomeComp></HomeComp>
    <AboutComp></AboutComp>
    <WorksComp></WorksComp>
    <SkillComp></SkillComp>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/Header'
import HomeComp from './components/HomeComp'
import AboutComp from './components/AboutComp'
import WorksComp from './components/WorksComp'
import SkillComp from './components/SkillComp'
import Footer from './components/Footer'

export default {
  components: {
    Header,
    HomeComp,
    AboutComp,
    WorksComp,
    SkillComp,
    Footer
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
