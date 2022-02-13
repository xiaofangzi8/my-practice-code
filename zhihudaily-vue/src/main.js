// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import api from './api/index'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
//import axios from "axios";

Vue.config.productionTip = false

/* eslint-disable no-new */
// Vue.prototype.$api = api
//Vue.prototype.axios = axios
Vue.use(ElementUI)
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
