import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Axios from 'axios'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader

Vue.use(Vuetify)

Vue.prototype.$http = Axios;

const token = JSON.parse(localStorage.getItem('token'))
if (token) {
  Vue.prototype.$http.defaults.headers.common['Accept'] = 'application/json'	
  Vue.prototype.$http.defaults.headers.common['Authorization'] = `${token.token_type} ${token.access_token}`
}

Vue.config.productionTip = false

new Vue({
  vuetify: new Vuetify(),
  router,
  store,
  render: h => h(App)
}).$mount('#app')
