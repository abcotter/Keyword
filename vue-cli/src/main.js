import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './components/Home.vue'
import HelloWorld from './components/HelloWorld.vue'

Vue.use(VueRouter)

Vue.config.productionTip = false


const Bar = { template: '<div>bar</div>' }

const routes = [
  { path: '/', component: Home},
  { path: '/foo', component: HelloWorld },
  { path: '/bar', component: Bar }
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
