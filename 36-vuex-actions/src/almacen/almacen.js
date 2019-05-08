import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export const almacen = new Vuex.Store({
    state:{
        cantidad: 0
    },
    mutations: {
        aumentar: (state,cantidad) => state.cantidad+= cantidad,
        reducir: (state, cantidad) => state.cantidad-= cantidad,
    },
    actions:{
        aumentarAsync: (context, cantidad) => {
            console.log("aumentarAsync cant", cantidad);
            // Llama la mutación de forma asincronica
            setTimeout(() => context.commit('aumentar', cantidad), 2000);
        },
        reducirAsync: (context, cantidad) => {
            console.log("reducirAsync cant", cantidad);
            // Llama la mutación de forma asincronica
            setTimeout(() => context.commit('reducir', cantidad), 2000);
            //setTimeout(() => commit('reducir', cantidad), 2000);
        }
    }
});