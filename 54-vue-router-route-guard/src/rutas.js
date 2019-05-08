// Aqui va la relacion del Path y el componente
import Home from './componentes/Home.vue';
import Contacto from './componentes/Contacto.vue';
import Usuario from './componentes/Usuario.vue';

import {store} from './store';

export const routes = [
    {path: '/', component: Home},
    {path: '/contacto', component: Contacto, beforeEnter: ((to, from, next) => {
        console.log('Acceso a ruta contacto');
        next(store.state.auth);
    })},
    {path: '/usuario/:id', component: Usuario},
];