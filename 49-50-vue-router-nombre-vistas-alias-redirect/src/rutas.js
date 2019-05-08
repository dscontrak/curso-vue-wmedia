// Aqui va la relacion del Path y el componente
import Home from './componentes/Home.vue';
import Equipo from './componentes/Equipo.vue';
import Usuario from './componentes/Usuario.vue';
import UsuarioBiografia from './componentes/UsuarioBiografia.vue';
import UsuarioFotos from './componentes/UsuarioFotos.vue';

export const routes = [
    {path: '/', component: Home, name: 'home'},  // -> /
    //{path: '/prueba', redirect: '/', alias:'/otraprueba' , component: Home},  // -> / Aliast, Redirect
    {path: '/prueba', redirect: {name: 'home'}, alias:'/otraprueba' , component: Home},  // -> / Aliast, Redirect
    {path: '/equipo/:id', component: Equipo, // -> /equipo
        children: [
                    {path: '', name:'equipo', 
                        components: {
                            default: Usuario,
                            bio: UsuarioBiografia,
                            fotos: UsuarioFotos
                            
                        } 
                    } // -> /equipo/X
        ]
    },
];

