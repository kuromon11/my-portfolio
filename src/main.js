// import { library } from '@fortawesome/fontawesome-svg-core'
// import { faGlobe,faBlog,faBirthdayCake,faImage } from '@fortawesome/free-solid-svg-icons'
// import { faTwitter,faGithub,faHtml5,faCss3Alt,faJsSquare } from '@fortawesome/free-brands-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import Vue from 'vue'
import App from './App.vue'
import router from "./router";

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
