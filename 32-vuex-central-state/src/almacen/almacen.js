import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export const almacen = new Vuex.Store({
   state: {
       cantidad: 0,
   }
});