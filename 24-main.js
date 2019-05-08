
Vue.component('todos-usuarios',{
    template: '#template-todosusuarios',
    mounted() {
        this.obtenerTodosUsuarios();
    },
    data() {
        return {
            todosusuarios: [],
            busqueda: ''
        }
    },
    methods: {
        obtenerTodosUsuarios() {
            axios.get('https://jsonplaceholder.typicode.com/users')
                .then((respuesta) => {
                    //this.todosusuarios = respuesta.data;
                    //console.log(respuesta);
                    const datosUsuarios = respuesta.data.map((usuario) => {
                      return {
                          nombre: usuario.name,
                          email:  usuario.email
                      };  
                    });
                    console.log(datosUsuarios);
                    this.todosusuarios = datosUsuarios;
                    //console.log(this.todosusuarios);
                });
        }
    },
    computed:{
        busquedaFiltrada() {
            return this.todosusuarios.filter((usuario)=> {
                return usuario.nombre.toLowerCase().includes(this.busqueda.toLowerCase());
            });
        }
    }
});

Vue.component('usuario',{
    props: ['dato'],
    template: '#template-usuario' 
});

new Vue({
    el: 'main',
});
