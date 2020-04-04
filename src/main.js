import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import store from './store'

import './assets/css/normalize.css'
import './assets/css/skeleton.css'

import './assets/scss/app.scss';

Vue.config.productionTip = false


new Vue({
   router,
   store,
  render: h => h(App),
}).$mount('#app')
