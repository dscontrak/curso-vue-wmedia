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
  
  //console.log(to,from);
  // Si es verdadero pasa a la siguiente
  console.log("Estado de store.state.auth: " + store.state.auth);
  next(store.state.auth);
  
});

new Vue({
  el: '#app',
  store,
  router: router,
  render: h => h(App)
})
