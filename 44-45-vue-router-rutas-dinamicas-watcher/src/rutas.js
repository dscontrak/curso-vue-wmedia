// Aqui va la relacion del Path y el componente
import Home from './componentes/Home.vue';
import Contacto from './componentes/Contacto.vue';
import Usuario from './componentes/Usuario.vue';

export const routes = [
    {path: '/', component: Home},
    {path: '/contacto', component: Contacto},
    {path: '/usuario/:id', component: Usuario},
];