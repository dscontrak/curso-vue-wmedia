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
  
  //console.log("Global guard / Guardia global");
  console.info("Estado de store.state.auth: " + store.state.auth);
  console.log("META Privado=", to.meta);
  if(to.meta.privado){
    next(store.state.auth);
  }else{
    next();
  }
  
});

new Vue({
  el: '#app',
  store,
  router: router,
  render: h => h(App)
})
