import Vue from 'vue';
import Vuex from 'vuex';
import productos from './modulos/productos';
import {getters} from './getters';
import {mutations} from './mutations';

Vue.use(Vuex);

export const almacen = new Vuex.Store({
    state: {
        carro: [],
    },
    /*getters: {
        totalCompra: (state) => state.carro.reduce((total, producto) => total + producto.precio, 0),
    },*/
    getters: getters,
    /*mutations: {
        comprarProducto: (state, indice) => state.carro.unshift(state.productos[indice]),
        eliminarProducto: (state, indice) => state.carro.splice(indice, 1),
    },*/
    mutations: mutations,
    modules: {
        productos
    }
});


