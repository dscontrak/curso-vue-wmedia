// Aqui va la relacion del Path y el componente
import Home from './componentes/Home.vue';
import Contacto from './componentes/Contacto.vue';

export const routes = [
    {path: '/', component: Home},
    {path: '/contacto', component: Contacto},
];