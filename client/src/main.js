import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './registerServiceWorker'

import dateTime from '@/filters/dateTime.filter';
Vue.filter('dateTime', dateTime);

import Loader from '@/components/app/Loader';
Vue.component('Loader', Loader);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
