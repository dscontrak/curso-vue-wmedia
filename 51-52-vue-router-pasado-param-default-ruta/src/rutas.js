// Aqui va la relacion del Path y el componente
import Home from './componentes/Home.vue';
import Equipo from './componentes/Equipo.vue';
import Usuario from './componentes/Usuario.vue';
import UsuarioBiografia from './componentes/UsuarioBiografia.vue';
import UsuarioFotos from './componentes/UsuarioFotos.vue';
import Contacto from './componentes/Contacto.vue';
import Defecto from './componentes/Defecto.vue';

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
    //{path: '/contacto/:newsletter', component: Contacto, name: 'contacto'},  // -> /contacto, pasar a la data
    //{path: '/contacto/:newsletter', component: Contacto, name: 'contacto', props: true},  // -> /contacto, para pasar a las props y se pasa por la URL
    {path: '/contacto/', component: Contacto, name: 'contacto', props: {newsletter: false}},  // -> /contacto, como objeto pero no en la URL
    
];

