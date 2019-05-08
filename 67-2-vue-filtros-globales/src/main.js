import Vue from 'vue'
import App from './App.vue'

Vue.filter('mayusculas',(valor) => {
  return valor.toUpperCase();
});

new Vue({
  el: '#app',
  render: h => h(App)
})
