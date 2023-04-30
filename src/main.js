import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Framework from '@/components/Framework.vue'
import Sidebar from '@/components/Sidebar.vue'
import Sidebar_calendar from '@/components/Sidebar_calendar.vue'
import axios from 'axios'
Vue.prototype.$axios = axios

axios.defaults.baseURL = 'http://localhost:8080'
Vue.use(ElementUI);
Vue.component('Framework',Framework);
Vue.component('Sidebar',Sidebar);
Vue.component('Sidebar_calendar',Sidebar_calendar);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
