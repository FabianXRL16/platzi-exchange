import Vue from 'vue'
import App from './App.vue'
import { VueSpinners } from '@saeris/vue-spinners'

import router from "@/router"

import "./assets/styles.css"

import {dollarFilter, percentFilter} from "@/filters"

Vue.use(VueSpinners)
Vue.filter("dollar",dollarFilter)
Vue.filter("percent",percentFilter)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
