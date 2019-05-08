import Vue from 'vue';
import App from './App.vue';
import {almacen} from './almacen/almacen';

new Vue({
  el: '#app',
  store: almacen,
  render: h => h(App)
})
