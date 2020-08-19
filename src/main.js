import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap-grid.min.css'

import SignInPage from './pages/SignInPage/index.vue'
import ContactsPage from './pages/ContactsPage/index.vue'

Vue.config.productionTip = false

Vue.use(Router)

export const router = new Router({
  mode: 'history',
  routes: [
    {path: '/', name: 'signIn', component: SignInPage},
    {path: '/contacts', name: 'contacts', component: ContactsPage},
  ]
    }
)

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
