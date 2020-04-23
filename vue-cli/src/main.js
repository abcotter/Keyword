import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './components/Home.vue'
import Keywords from './components/Keywords.vue'

Vue.use(VueRouter)

Vue.config.productionTip = false

const routes = [
  { path: '/', component: Home},
  { path: '/keywords', component: Keywords, props: true}
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
