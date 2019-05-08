import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router';
import {routes} from './rutas'
import {store} from './store'

Vue.use(VueRouter);

const router = new VueRouter({
  routes
});

router.beforeEach((to, from, next) => {
  
  console.log("Global guard / Guardia global");
  console.log("Estado de store.state.auth: " + store.state.auth);
  next();
  
});

new Vue({
  el: '#app',
  store,
  router: router,
  render: h => h(App)
})
