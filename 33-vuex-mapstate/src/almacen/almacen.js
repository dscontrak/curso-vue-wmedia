import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const almacen = new Vuex.Store({
    state: {
        nombre:     "Daniel Alberto",
        apellidos:  "Serna Contreras",
        email:      "dscontrak@loquesea.com",
        ciudad:     "Mex"
    }
});