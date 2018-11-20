import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import AOS from 'aos';
import 'aos/dist/aos.css';

Vue.config.productionTip = false
Vue.prototype.$http = axios

new Vue({
  created(){
    AOS.init({
      duration: 1600,
    })
  },
  router,
  render: h => h(App)
}).$mount('#app')
