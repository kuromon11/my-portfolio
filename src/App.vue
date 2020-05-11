<template>
  <div id=app>
    <Header></Header>
    <transition
      name="fade"
      mode="out-in"
      @before-enter="beforeEnter"
    ></transition>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
// リセットCSS
import 'normalize.css'

export default {
  components: {
    Header,
    Footer
  },
  methods: {
    beforeEnter() {
      this.$root.$emit("triggerScroll");
    }
  }
}
</script>

<style>
/* @import url('https://fonts.googleapis.com/css?family=Noto+Sans+JP:300&display=swap&subset=japanese'); */
@import url("https://fonts.googleapis.com/css2?family=Comic+Neue:ital,wght@1,300&display=swap");
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #202d3a;
  background: linear-gradient(0deg,#5995e4 0,#9ddbf0);
  margin-top: 80px;
  min-height: calc(100vh - 80px);
}
</style>
