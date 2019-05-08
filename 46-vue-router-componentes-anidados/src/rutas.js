// Aqui va la relacion del Path y el componente
import Home from './componentes/Home.vue';
import Equipo from './componentes/Equipo.vue';
import EquipoDaniel from './componentes/EquipoDaniel.vue';

export const routes = [
    {path: '/', component: Home},  // -> /
    {path: '/equipo', component: Equipo, // -> /equipo
        children: [
            {path: 'daniel', component: EquipoDaniel} // -> /equipo/daniel
        ]
    },
];