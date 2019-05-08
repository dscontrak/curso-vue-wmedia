// Aqui va la relacion del Path y el componente
import Home from './componentes/Home.vue';
import Equipo from './componentes/Equipo.vue';
import Usuario from './componentes/Usuario.vue';
import UsuarioBiografia from './componentes/UsuarioBiografia.vue';
import UsuarioFotos from './componentes/UsuarioFotos.vue';

export const routes = [
    {path: '/', component: Home},  // -> /
    {path: '/equipo/:id', component: Equipo, // -> /equipo
        children: [
                    {path: '', name:'equipo', component: Usuario, children:[
                    {path: 'fotos', name: 'fotos', component: UsuarioFotos},
                    {path: 'bio', name: 'bio', component: UsuarioBiografia},
                ]
            } // -> /equipo/daniel
        ]
    },
];